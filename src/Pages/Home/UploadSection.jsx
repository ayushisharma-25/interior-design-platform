import React from "react";
import { toast } from "react-toastify";
import { useDrag, useDrop } from "react-dnd";
import {
    validateName,
    validateEmail,
    validatePhone,
} from "../../utils/validators";
import { FaTriangleExclamation } from "react-icons/fa6";

function UploadSection({
    showUploader,
    setShowUploader,
    dndImages,
    moveImage,
    deleteImage,
    handleSingleImageUpload,
    setShowForm,
    showForm,
    formData,
    setFormData,
    errors,
    setErrors,
    handleFinalSubmit,
    submitted,
}) {
    const DndImageItem = ({ src, index, moveImage, deleteImage }) => {
        const ref = React.useRef(null);

        const [, drop] = useDrop({
            accept: "image",
            hover: (item) => {
                if (!ref.current) return;

                const dragIndex = item.index;
                const hoverIndex = index;

                if (dragIndex === hoverIndex) return;

                moveImage(dragIndex, hoverIndex);
                item.index = hoverIndex;
            }
        });

        const [{ isDragging }, drag] = useDrag({
            type: "image",
            item: { index },
            collect: (monitor) => ({
                isDragging: monitor.isDragging()
            })
        });

        drag(drop(ref));
        return (
            <div
                ref={ref}
                className="dnd-item"
                style={{ opacity: isDragging ? 0.5 : 1 }}
            >
                <img src={src} alt="" />

                <button
                    className="delete-btn"
                    onClick={() => deleteImage(index)}
                >
                    ❌
                </button>
            </div>
        );
    }
    return (
        <>
            {showUploader && (
                <div className="upload-section">
                    <div className="container up-pic">
                        <div className="upload-header">
                            <h3>Upload Your Space</h3>
                            <button onClick={() => setShowUploader(false)}>✖</button>
                        </div>

                        <div className="upload-gallery">
                            {dndImages.map((img, index) => (
                                <DndImageItem
                                    key={index}
                                    src={img}
                                    index={index}
                                    moveImage={moveImage}
                                    deleteImage={deleteImage}
                                />
                            ))}

                            <label className="upload-box">
                                +
                                <input
                                    type="file"
                                    multiple
                                    onChange={handleSingleImageUpload}
                                    hidden
                                />
                            </label>
                        </div>

                        <div className="upload-footer">
                            <button
                                className="submit-btn"
                                onClick={() => {
                                    if (dndImages.length < 2) {
                                        toast.error("Upload at least two images", {
                                            icon: <FaTriangleExclamation />
                                        });
                                        return;
                                    }
                                    setShowForm(true);
                                }}
                            >
                                Submit
                            </button>
                        </div>

                        {showForm && (
                            <div className="modal-overlay">
                                <div className="modal-box">

                                    <button
                                        className="close-btn"
                                        onClick={() => setShowForm(false)}
                                    >
                                        ✖
                                    </button>

                                    <h3>Get Free Consultation</h3>

                                    <div className="form-group">
                                        <input
                                            type="text"
                                            placeholder="Enter Your Name"
                                            value={formData.name}
                                            onChange={(e) => {
                                                setFormData({
                                                    ...formData,
                                                    name: e.target.value,
                                                });

                                                setErrors({
                                                    ...errors,
                                                    name: validateName(e.target.value),
                                                });
                                            }}
                                            className={errors.name ? "input-error" : ""}
                                        />

                                        {errors.name && (
                                            <small className="text-danger">
                                                {errors.name}
                                            </small>
                                        )}
                                    </div>

                                    <div className="form-group">
                                        <input
                                            type="email"
                                            placeholder="Enter Your Email"
                                            value={formData.email}
                                            onChange={(e) => {
                                                setFormData({
                                                    ...formData,
                                                    email: e.target.value,
                                                });

                                                setErrors({
                                                    ...errors,
                                                    email: validateEmail(e.target.value),
                                                });
                                            }}
                                            className={errors.email ? "input-error" : ""}
                                        />

                                        {errors.email && (
                                            <small className="text-danger">
                                                {errors.email}
                                            </small>
                                        )}
                                    </div>

                                    <div className="form-group">
                                        <input
                                            type="tel"
                                            placeholder="Enter Your Phone Number"
                                            value={formData.phone}
                                            onChange={(e) => {
                                                setFormData({
                                                    ...formData,
                                                    phone: e.target.value,
                                                });

                                                setErrors({
                                                    ...errors,
                                                    phone: validatePhone(e.target.value),
                                                });
                                            }}
                                            className={errors.phone ? "input-error" : ""}
                                        />

                                        {errors.phone && (
                                            <small className="text-danger">
                                                {errors.phone}
                                            </small>
                                        )}
                                    </div>

                                    <button
                                        className="sub"
                                        onClick={handleFinalSubmit}
                                    >
                                        Submit Now
                                    </button>

                                </div>
                            </div>
                        )}

                    </div>
                </div>
            )}
            
            {
                submitted && (
                    <div className="success-msg">
                        ✅ Thanks for submitting, we will connect you soon
                    </div>
                )
            }
        </>
    );
}

export default UploadSection;
import "./Home.css";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroSection from "./HeroSection";
import InteriorSection from "./InteriorSection";
import FurnitureSection from "./FurnitureSection";
import ReasonSection from "./ReasonSection";
import WorkSection from "./WorkSection";
import UploadSection from "./UploadSection";
import NumberSection from "./NumberSection";
import SliderSection from "./SliderSection";
import {
    validateName,
    validateEmail,
    validatePhone,
} from "../../utils/validators";

function Home() {
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [showUploader, setShowUploader] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [dndImages, setDndImages] = useState([]);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: ""
    });

    const handleSingleImageUpload = (e) => {

        const files = Array.from(e.target.files);

        setUploadedFiles((prev) => [...prev, ...files]);

        const imageUrls = files.map((file) =>
            URL.createObjectURL(file)
        );

        setDndImages((prev) => [...prev, ...imageUrls]);
    };

    const deleteImage = (indexToDelete) => {
        setDndImages((prev) => {
            URL.revokeObjectURL(prev[indexToDelete]);
            return prev.filter((_, i) => i !== indexToDelete);
        });
    };

    const moveImage = (dragIndex, hoverIndex) => {
        const updated = [...dndImages];
        const draggedItem = updated.splice(dragIndex, 1)[0];
        updated.splice(hoverIndex, 0, draggedItem);
        setDndImages(updated);
    };



    const handleFinalSubmit = async () => {
        const name = formData.name.trim();

        const phone = formData.phone.trim();

        const email = formData.email.trim().toLowerCase();
        let newErrors = {
            name: validateName(name),
            phone: validatePhone(phone),
            email: validateEmail(email),
        };

        Object.keys(newErrors).forEach((key) => {
            if (!newErrors[key]) {
                delete newErrors[key];
            }
        });

        // const existingEmails =
        //     (JSON.parse(localStorage.getItem("submittedEmails")) || [])
        //         .map((item) => item.toLowerCase().trim());

        // if (existingEmails.includes(email)) {
        //     newErrors.email = "Email already submitted";
        // }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});

        setSubmitted(true);

        setShowForm(false);
        setShowUploader(false);

        const currentImages = [...dndImages];

        setDndImages([]);

        setUploadedFiles([]);

        setFormData({
            name: "",
            phone: "",
            email: "",
        });
    

        try {

            const formPayload = new FormData();

            formPayload.append("type", "home");
            formPayload.append("name", name);
            formPayload.append("phone", phone);
            formPayload.append("email", email);

            uploadedFiles.forEach((file) => {
                formPayload.append("images", file);
            });

            const response = await fetch("http://localhost:5000/send-email", {
                method: "POST",
                body: formPayload,
            });

            console.log("STATUS =>", response.status);

            const text = await response.text();

            console.log("RESPONSE =>", text);

            // localStorage.setItem(
            //     "submittedEmails",
            //     JSON.stringify([...existingEmails, email])
            // );

            dndImages.forEach((img) => URL.revokeObjectURL(img));

            if (response.ok) {
                setSubmitted(true);

                setDndImages([]);

                setFormData({
                    name: "",
                    phone: "",
                    email: "",
                });

                setShowForm(false);
                setShowUploader(false);
            }

            setTimeout(() => {
                setSubmitted(false);
            }, 5000);

        } catch (error) {

            console.log("Email Error:", error);
        }
    };

    return (
        <>
            <HeroSection />
            <InteriorSection />
            <NumberSection />
            <FurnitureSection />
            <ReasonSection />
            <WorkSection setShowUploader={setShowUploader} />
            <UploadSection
                showUploader={showUploader}
                setShowUploader={setShowUploader}
                dndImages={dndImages}
                moveImage={moveImage}
                deleteImage={deleteImage}
                handleSingleImageUpload={handleSingleImageUpload}
                setShowForm={setShowForm}
                showForm={showForm}
                formData={formData}
                setFormData={setFormData}
                errors={errors}
                setErrors={setErrors}
                handleFinalSubmit={handleFinalSubmit}
                submitted={submitted}
            />
            <SliderSection />
        </>
    );
}
export default Home;

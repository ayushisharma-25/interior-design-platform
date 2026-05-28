import jsPDF from "jspdf";

export const downloadInvoice = async (order, item) => {
    const doc = new jsPDF("p", "mm", "a4");
    const pageWidth = 210;

    const loadImage = (src) =>
        new Promise((resolve) => {
            const img = new Image();
            img.crossOrigin = "anonymous";
            img.src = src;
            img.onload = () => resolve(img);
        });

    doc.setFillColor(250, 248, 244);
    doc.rect(0, 0, 210, 297, "F");

    doc.setFillColor(255, 255, 255);
    doc.roundedRect(8, 8, 194, 255, 2, 2, "F");

    doc.setDrawColor(230, 223, 214);
    doc.line(15, 15, 15, 250);

    doc.setTextColor(58, 38, 22);
    doc.setFont("times", "bold");
    doc.setFontSize(30);
    doc.text("INDOOR", 35, 28);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text("F U R N I T U R E", 35, 36);

    doc.setTextColor(150, 125, 90);
    doc.text("Comfort. Quality. Style.", 35, 44);

    doc.setTextColor(55, 35, 18);
    doc.setFont("times", "bold");
    doc.setFontSize(38);
    doc.text("INVOICE", 18, 65);

    doc.setDrawColor(190, 160, 120);
    doc.line(18, 72, 80, 72);

    try {
        const sofa = await loadImage("/invoicesofa.jpg");
        doc.addImage(sofa, "JPEG", 105, 10, 88, 62);
    } catch (err) {
        console.log("Image not loaded");
    }

    doc.setTextColor(35, 35, 35);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);

    doc.text(`Invoice ID   : ${order.orderId}`, 18, 85);
    doc.text(`Invoice Date : ${order.orderDate}`, 18, 95);
    doc.text(`Website      : indoorfurniture.com`, 18, 105);

    doc.setFillColor(68, 43, 20);
    doc.roundedRect(122, 82, 28, 9, 2, 2, "F");

    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.text("BILL TO", 128, 88);

    doc.setTextColor(0, 0, 0);
    doc.setFontSize(12);
    doc.text(`${order.firstName} ${order.lastName}`, 125, 98);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text(`${order.address}`, 125, 106);
    doc.text(`${order.city}, ${order.state}`, 125, 112);
    doc.text(`+91 ${order.phone}`, 125, 118);

    doc.setFillColor(95, 60, 30);
    doc.roundedRect(15, 130, 180, 12, 2, 2, "F");

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(11);
    doc.text("No.", 22, 138);
    doc.text("DESCRIPTION", 52, 138);
    doc.text("QTY", 112, 138);
    doc.text("RATE", 140, 138);
    doc.text("TOTAL", 168, 138);

    doc.setFillColor(248, 245, 240);
    doc.rect(15, 142, 180, 18, "F");

    doc.setTextColor(40, 40, 40);
    doc.text("1", 24, 153);
    doc.text(item?.title?.slice(0, 24) || "Furniture Product", 36, 153);
    doc.text(`${item?.qty}`, 112, 153);
    doc.text(`Rs${item?.price}`, 138, 153);
    doc.text(`Rs${order.total}`, 166, 153);

    doc.setTextColor(140, 100, 50);
    doc.setFont("helvetica", "bold");
    doc.text("Thank you for choosing Indoor Furniture.", 18, 178);

    doc.setTextColor(50, 50, 50);
    doc.setFont("helvetica", "normal");
    doc.text("We appreciate your business!", 18, 186);

    doc.setDrawColor(220, 205, 185);
    doc.roundedRect(112, 180, 78, 52, 3, 3);

    doc.setFont("helvetica", "bold");
    doc.setTextColor(40, 40, 40);

    doc.text("SUBTOTAL", 120, 192);
    doc.text(`Rs${order.subtotal}`, 168, 192);

    doc.text("TAX (18% GST)", 120, 202);
    doc.text(`Rs${order.tax}`, 168, 202);

    doc.text("SHIPPING", 120, 212);
    doc.text(
        order.shipping === 0 ? "Free" : `Rs${order.shipping}`,
        168,
        212
    );

    if (order.discount > 0) {
        doc.setTextColor(180, 40, 40);
        doc.text("DISCOUNT", 120, 222);
        doc.text(`-Rs${order.discount}`, 168, 222);
    }

    doc.setFillColor(190, 160, 120);
    doc.rect(112, 224, 78, 14, "F");

    doc.setTextColor(255, 255, 255);
    doc.text("TOTAL AMOUNT", 120, 233);
    doc.text(`Rs${order.total}`, 168, 233);

    doc.setFillColor(58, 38, 22);
    doc.rect(0, 285, pageWidth, 12, "F");

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(9);
    doc.text("+91 9876543210", 15, 292);
    doc.text("info@indoorfurniture.com", 75, 292);
    doc.text("India", 170, 292);

    doc.save(`invoice-${order.orderId}.pdf`);
};
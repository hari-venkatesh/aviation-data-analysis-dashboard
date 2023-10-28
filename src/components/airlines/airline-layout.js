"use client";

import { useState } from "react";
import Button from "../formControls/button";
import Modal from "../model";
import { airlinesFormControls } from "@/utils/config";
import { useRouter } from "next/navigation";

const initialFormData = {
  name: "",
  economyClass: 0,
  businessClass: 0,
  aircraftType: "",
  origin: "",
  destination: "",
  month: "",
};

export default function AirlinesLayout({ children }) {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const router = useRouter();

  async function handleAddAirlines() {
    const res = await fetch("/api/airlines/add-airline", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    console.log(data);

    if (data && data.success) {
      setFormData(initialFormData);
      setShowModal(false);
      router.refresh();
    } else {
      setFormData(initialFormData);
      setShowModal(false);
    }
  }

  return (
    <div>
      <Button onClick={() => setShowModal(true)} text={"Add Airlines Info"} />
      {children}
      <Modal
        show={showModal}
        setShow={setShowModal}
        formData={formData}
        setFormData={setFormData}
        formControls={airlinesFormControls}
        onAdd={handleAddAirlines}
      />
    </div>
  );
}

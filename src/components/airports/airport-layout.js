"use client";

import { useEffect, useState } from "react";
import Button from "../formControls/button";
import Modal from "../model";
import { airportFormControls } from "@/utils/config";
import { useRouter } from "next/navigation";

const intialFormData = {
  name: "",
  noOfAirlines: "",
  noOfAircrafts: "",
  noOfFlightCancelledByAirport: "",
  noOfFlightCancelledByAirlines: "",
  month: "",
};

export default function AirportLayout({ children }) {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState(intialFormData);

  const router = useRouter();

  console.log(formData);

  async function handleAddAirport() {
    const res = await fetch("/api/airports/add-airport", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data && data.success) {
      setFormData(intialFormData);
      setShowModal(false);
      router.refresh();
    } else {
      setFormData(intialFormData);
      setShowModal(false);
    }
  }

  return (
    <div>
      <Button onClick={() => setShowModal(true)} text={"Add New Airport"} />
      {children}
      <Modal
        show={showModal}
        setShow={setShowModal}
        formData={formData}
        setFormData={setFormData}
        formControls={airportFormControls}
        onAdd={handleAddAirport}
      />
    </div>
  );
}

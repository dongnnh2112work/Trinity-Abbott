"use client";

import { useCallback, useState } from "react";
import { Scene1 } from "./Scene1";
import { Scene2 } from "./Scene2";

type Scene = "input" | "result";

export function Experience() {
  const [scene, setScene] = useState<Scene>("input");
  const [guestName, setGuestName] = useState("");

  const handleConfirm = useCallback((name: string) => {
    setGuestName(name);
    setScene("result");
  }, []);

  const handleBack = useCallback(() => {
    setScene("input");
  }, []);

  if (scene === "result") {
    return <Scene2 name={guestName} onBack={handleBack} />;
  }

  return <Scene1 onConfirm={handleConfirm} />;
}

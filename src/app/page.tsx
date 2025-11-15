"use client"

import { useState } from "react"
import { Onboarding } from "@/components/fitness/onboarding"
import { Dashboard } from "@/components/fitness/dashboard"

export default function Home() {
  const [userProfile, setUserProfile] = useState<any>(null)

  if (!userProfile) {
    return <Onboarding onComplete={setUserProfile} />
  }

  return <Dashboard userProfile={userProfile} />
}

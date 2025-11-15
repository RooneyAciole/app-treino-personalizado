"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { WorkoutPlan } from "./workout-plan"
import { NutritionPlan } from "./nutrition-plan"
import { ProgressTracker } from "./progress-tracker"
import { MonthlyReport } from "./monthly-report"
import { VideoAnalysis } from "./video-analysis"
import { DashboardOverview } from "./dashboard-overview"
import { Dumbbell, Utensils, TrendingUp, FileText, Video, LayoutDashboard } from "lucide-react"

interface DashboardProps {
  userProfile: any
}

export function Dashboard({ userProfile }: DashboardProps) {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-purple-950 dark:to-slate-900">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
            Olá, {userProfile.name}! 💪
          </h1>
          <p className="text-muted-foreground">
            Plano: <span className="font-semibold text-purple-600">{userProfile.plan === "pro" ? "Pro ⭐" : "Básico"}</span>
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 sm:grid-cols-6 gap-2 h-auto bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm p-2 rounded-2xl">
            <TabsTrigger value="overview" className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white">
              <LayoutDashboard className="w-4 h-4" />
              <span className="text-xs sm:text-sm">Início</span>
            </TabsTrigger>
            <TabsTrigger value="workout" className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white">
              <Dumbbell className="w-4 h-4" />
              <span className="text-xs sm:text-sm">Treino</span>
            </TabsTrigger>
            <TabsTrigger value="nutrition" className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white">
              <Utensils className="w-4 h-4" />
              <span className="text-xs sm:text-sm">Dieta</span>
            </TabsTrigger>
            <TabsTrigger value="progress" className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white">
              <TrendingUp className="w-4 h-4" />
              <span className="text-xs sm:text-sm">Progresso</span>
            </TabsTrigger>
            <TabsTrigger value="report" className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white">
              <FileText className="w-4 h-4" />
              <span className="text-xs sm:text-sm">Relatório</span>
            </TabsTrigger>
            {userProfile.plan === "pro" && (
              <TabsTrigger value="video" className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white">
                <Video className="w-4 h-4" />
                <span className="text-xs sm:text-sm">Análise</span>
              </TabsTrigger>
            )}
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <DashboardOverview userProfile={userProfile} />
          </TabsContent>

          <TabsContent value="workout" className="space-y-6">
            <WorkoutPlan userProfile={userProfile} />
          </TabsContent>

          <TabsContent value="nutrition" className="space-y-6">
            <NutritionPlan userProfile={userProfile} />
          </TabsContent>

          <TabsContent value="progress" className="space-y-6">
            <ProgressTracker userProfile={userProfile} />
          </TabsContent>

          <TabsContent value="report" className="space-y-6">
            <MonthlyReport userProfile={userProfile} />
          </TabsContent>

          {userProfile.plan === "pro" && (
            <TabsContent value="video" className="space-y-6">
              <VideoAnalysis userProfile={userProfile} />
            </TabsContent>
          )}
        </Tabs>
      </div>
    </div>
  )
}

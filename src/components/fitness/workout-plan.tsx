"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Dumbbell, Play, CheckCircle2, Clock, Flame } from "lucide-react"
import { ExerciseAnimation } from "./exercise-animation"

interface WorkoutPlanProps {
  userProfile: any
}

export function WorkoutPlan({ userProfile }: WorkoutPlanProps) {
  const [completedExercises, setCompletedExercises] = useState<string[]>([])

  const isPro = userProfile.plan === "pro"

  const workoutDays = [
    {
      day: "Segunda - Peito e Tríceps",
      duration: "45 min",
      calories: "350 kcal",
      exercises: [
        { name: "Supino Reto", sets: "4x12", rest: "60s", difficulty: "intermediate", video: "supino-reto" },
        { name: "Supino Inclinado", sets: "3x12", rest: "60s", difficulty: "intermediate", video: "supino-inclinado" },
        { name: "Crucifixo", sets: "3x15", rest: "45s", difficulty: "beginner", video: "crucifixo" },
        { name: "Tríceps Testa", sets: "3x12", rest: "45s", difficulty: "intermediate", video: "triceps-testa" },
        { name: "Tríceps Corda", sets: "3x15", rest: "45s", difficulty: "beginner", video: "triceps-corda" },
        ...(isPro ? [
          { name: "Supino Declinado", sets: "3x10", rest: "60s", difficulty: "advanced", video: "supino-declinado" },
          { name: "Mergulho em Paralelas", sets: "3x10", rest: "60s", difficulty: "advanced", video: "mergulho" }
        ] : [])
      ]
    },
    {
      day: "Terça - Costas e Bíceps",
      duration: "50 min",
      calories: "380 kcal",
      exercises: [
        { name: "Barra Fixa", sets: "4x8", rest: "90s", difficulty: "intermediate", video: "barra-fixa" },
        { name: "Remada Curvada", sets: "4x12", rest: "60s", difficulty: "intermediate", video: "remada-curvada" },
        { name: "Puxada Frontal", sets: "3x12", rest: "60s", difficulty: "beginner", video: "puxada-frontal" },
        { name: "Rosca Direta", sets: "3x12", rest: "45s", difficulty: "beginner", video: "rosca-direta" },
        { name: "Rosca Martelo", sets: "3x12", rest: "45s", difficulty: "beginner", video: "rosca-martelo" },
        ...(isPro ? [
          { name: "Remada Unilateral", sets: "3x10", rest: "60s", difficulty: "advanced", video: "remada-unilateral" },
          { name: "Rosca Concentrada", sets: "3x12", rest: "45s", difficulty: "advanced", video: "rosca-concentrada" }
        ] : [])
      ]
    },
    {
      day: "Quarta - Pernas",
      duration: "55 min",
      calories: "420 kcal",
      exercises: [
        { name: "Agachamento Livre", sets: "4x12", rest: "90s", difficulty: "intermediate", video: "agachamento" },
        { name: "Leg Press", sets: "4x15", rest: "60s", difficulty: "beginner", video: "leg-press" },
        { name: "Cadeira Extensora", sets: "3x15", rest: "45s", difficulty: "beginner", video: "extensora" },
        { name: "Mesa Flexora", sets: "3x15", rest: "45s", difficulty: "beginner", video: "flexora" },
        { name: "Panturrilha em Pé", sets: "4x20", rest: "45s", difficulty: "beginner", video: "panturrilha" },
        ...(isPro ? [
          { name: "Agachamento Búlgaro", sets: "3x10", rest: "60s", difficulty: "advanced", video: "bulgaro" },
          { name: "Stiff", sets: "3x12", rest: "60s", difficulty: "advanced", video: "stiff" }
        ] : [])
      ]
    },
    {
      day: "Quinta - Ombros e Abdômen",
      duration: "40 min",
      calories: "320 kcal",
      exercises: [
        { name: "Desenvolvimento", sets: "4x12", rest: "60s", difficulty: "intermediate", video: "desenvolvimento" },
        { name: "Elevação Lateral", sets: "3x15", rest: "45s", difficulty: "beginner", video: "elevacao-lateral" },
        { name: "Elevação Frontal", sets: "3x12", rest: "45s", difficulty: "beginner", video: "elevacao-frontal" },
        { name: "Abdominal Supra", sets: "3x20", rest: "30s", difficulty: "beginner", video: "abdominal" },
        { name: "Prancha", sets: "3x60s", rest: "45s", difficulty: "beginner", video: "prancha" },
        ...(isPro ? [
          { name: "Remada Alta", sets: "3x12", rest: "60s", difficulty: "advanced", video: "remada-alta" },
          { name: "Abdominal Canivete", sets: "3x15", rest: "30s", difficulty: "advanced", video: "canivete" }
        ] : [])
      ]
    },
    {
      day: "Sexta - Treino Full Body",
      duration: "50 min",
      calories: "400 kcal",
      exercises: [
        { name: "Burpees", sets: "3x15", rest: "60s", difficulty: "intermediate", video: "burpees" },
        { name: "Flexão", sets: "3x20", rest: "45s", difficulty: "beginner", video: "flexao" },
        { name: "Agachamento Jump", sets: "3x15", rest: "60s", difficulty: "intermediate", video: "agachamento-jump" },
        { name: "Mountain Climbers", sets: "3x30s", rest: "45s", difficulty: "intermediate", video: "mountain-climbers" },
        { name: "Prancha Lateral", sets: "3x45s", rest: "45s", difficulty: "beginner", video: "prancha-lateral" },
        ...(isPro ? [
          { name: "Muscle Up", sets: "3x5", rest: "90s", difficulty: "advanced", video: "muscle-up" },
          { name: "Pistol Squat", sets: "3x8", rest: "60s", difficulty: "advanced", video: "pistol-squat" }
        ] : [])
      ]
    }
  ]

  const toggleExercise = (exerciseName: string) => {
    setCompletedExercises(prev =>
      prev.includes(exerciseName)
        ? prev.filter(e => e !== exerciseName)
        : [...prev, exerciseName]
    )
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner": return "bg-green-500"
      case "intermediate": return "bg-yellow-500"
      case "advanced": return "bg-red-500"
      default: return "bg-gray-500"
    }
  }

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-br from-purple-600 to-pink-600 text-white border-0 shadow-2xl">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-2">Seu Plano de Treino Personalizado</h2>
          <p className="text-white/90 mb-4">
            Baseado no seu objetivo: {userProfile.goal === "weight-loss" && "Perder Peso"}
            {userProfile.goal === "muscle-gain" && "Ganhar Massa"}
            {userProfile.goal === "definition" && "Definição"}
            {userProfile.goal === "health" && "Saúde"}
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>5 dias/semana</span>
            </div>
            <div className="flex items-center gap-2">
              <Flame className="w-5 h-5" />
              <span>~1850 kcal/semana</span>
            </div>
            <div className="flex items-center gap-2">
              <Dumbbell className="w-5 h-5" />
              <span>{isPro ? "Nível Avançado" : "Nível Intermediário"}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {isPro && (
        <Card className="bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 border-2 border-yellow-500">
          <CardContent className="p-4">
            <p className="text-sm font-semibold flex items-center gap-2">
              ⭐ <span>Plano Pro: Exercícios avançados incluídos + Vídeos demonstrativos com animações disponíveis</span>
            </p>
          </CardContent>
        </Card>
      )}

      <Accordion type="single" collapsible className="space-y-4">
        {workoutDays.map((workout, index) => (
          <AccordionItem key={index} value={`day-${index}`} className="border-0">
            <Card className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2 hover:shadow-xl transition-all duration-300">
              <AccordionTrigger className="hover:no-underline p-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-lg">{workout.day}</h3>
                      <p className="text-sm text-muted-foreground">{workout.exercises.length} exercícios</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {workout.duration}
                    </Badge>
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Flame className="w-3 h-3" />
                      {workout.calories}
                    </Badge>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="px-6 pb-6 space-y-3">
                  {workout.exercises.map((exercise, exIndex) => (
                    <div
                      key={exIndex}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                        completedExercises.includes(exercise.name)
                          ? "bg-green-100 dark:bg-green-900/30 border-green-500"
                          : "bg-gray-50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700"
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                        <div className="flex items-start gap-3 flex-1">
                          <button
                            onClick={() => toggleExercise(exercise.name)}
                            className="mt-1"
                          >
                            <CheckCircle2
                              className={`w-6 h-6 transition-colors ${
                                completedExercises.includes(exercise.name)
                                  ? "text-green-500 fill-green-500"
                                  : "text-gray-300"
                              }`}
                            />
                          </button>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-semibold">{exercise.name}</h4>
                              <div className={`w-2 h-2 rounded-full ${getDifficultyColor(exercise.difficulty)}`} />
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {exercise.sets} • Descanso: {exercise.rest}
                            </p>
                          </div>
                        </div>
                        {isPro && (
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button size="sm" variant="outline" className="gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 hover:from-purple-600 hover:to-pink-600">
                                <Play className="w-4 h-4" />
                                Ver Animação
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                              <DialogHeader>
                                <DialogTitle className="text-2xl">{exercise.name}</DialogTitle>
                                <DialogDescription>
                                  Aprenda a executar corretamente com animação demonstrativa
                                </DialogDescription>
                              </DialogHeader>
                              
                              <ExerciseAnimation 
                                exerciseId={exercise.video}
                                exerciseName={exercise.name}
                              />

                              <div className="mt-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-xl border-2 border-purple-200 dark:border-purple-800">
                                <h4 className="font-bold mb-2">📋 Detalhes do Treino</h4>
                                <div className="grid grid-cols-2 gap-3 text-sm">
                                  <div>
                                    <p className="text-muted-foreground">Séries e Repetições</p>
                                    <p className="font-semibold">{exercise.sets}</p>
                                  </div>
                                  <div>
                                    <p className="text-muted-foreground">Tempo de Descanso</p>
                                    <p className="font-semibold">{exercise.rest}</p>
                                  </div>
                                  <div>
                                    <p className="text-muted-foreground">Nível</p>
                                    <p className="font-semibold capitalize">{exercise.difficulty === "beginner" ? "Iniciante" : exercise.difficulty === "intermediate" ? "Intermediário" : "Avançado"}</p>
                                  </div>
                                  <div>
                                    <p className="text-muted-foreground">Tipo</p>
                                    <p className="font-semibold">Hipertrofia</p>
                                  </div>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </Card>
          </AccordionItem>
        ))}
      </Accordion>

      {isPro && (
        <Card className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              🧘 Alongamentos Diários (Plano Pro)
            </CardTitle>
            <CardDescription>Rotina de 10 minutos para fazer todos os dias</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { name: "Alongamento de Pescoço", duration: "30s cada lado" },
              { name: "Alongamento de Ombros", duration: "30s cada lado" },
              { name: "Alongamento de Costas", duration: "30s cada lado" },
              { name: "Alongamento de Pernas", duration: "30s cada lado" },
              { name: "Alongamento de Quadril", duration: "30s cada lado" }
            ].map((stretch, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl">
                <span className="font-medium">{stretch.name}</span>
                <Badge variant="secondary">{stretch.duration}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  )
}

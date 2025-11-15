"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Target, Flame, Dumbbell, TrendingUp, Calendar, Award } from "lucide-react"

interface DashboardOverviewProps {
  userProfile: any
}

export function DashboardOverview({ userProfile }: DashboardOverviewProps) {
  const stats = [
    { label: "Treinos Completos", value: "12", icon: Dumbbell, color: "from-blue-500 to-indigo-600" },
    { label: "Calorias Queimadas", value: "3.2k", icon: Flame, color: "from-orange-400 to-pink-600" },
    { label: "Dias Consecutivos", value: "7", icon: Calendar, color: "from-emerald-400 to-teal-600" },
    { label: "Meta Alcançada", value: "65%", icon: Target, color: "from-purple-500 to-pink-500" }
  ]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <Card key={index} className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <TrendingUp className="w-4 h-4 text-green-500" />
                </div>
                <p className="text-3xl font-bold mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-purple-600" />
              Seu Objetivo
            </CardTitle>
            <CardDescription>Progresso até sua meta</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Peso Atual: {userProfile.weight}kg</span>
                <span className="text-sm text-muted-foreground">Meta: {parseInt(userProfile.weight) - 5}kg</span>
              </div>
              <Progress value={65} className="h-3" />
            </div>
            <div className="p-4 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl">
              <p className="text-sm font-semibold mb-1">
                {userProfile.goal === "weight-loss" && "Perder Peso"}
                {userProfile.goal === "muscle-gain" && "Ganhar Massa Muscular"}
                {userProfile.goal === "definition" && "Definição Muscular"}
                {userProfile.goal === "health" && "Melhorar Saúde"}
              </p>
              <p className="text-xs text-muted-foreground">
                Você está no caminho certo! Continue assim 💪
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5 text-yellow-500" />
              Conquistas Recentes
            </CardTitle>
            <CardDescription>Suas vitórias esta semana</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white font-bold">
                🔥
              </div>
              <div>
                <p className="font-semibold text-sm">Sequência de 7 dias!</p>
                <p className="text-xs text-muted-foreground">Continue assim</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold">
                💪
              </div>
              <div>
                <p className="font-semibold text-sm">12 treinos completos</p>
                <p className="text-xs text-muted-foreground">Você é dedicado!</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-white font-bold">
                🎯
              </div>
              <div>
                <p className="font-semibold text-sm">Meta 65% alcançada</p>
                <p className="text-xs text-muted-foreground">Falta pouco!</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gradient-to-br from-purple-600 to-pink-600 text-white border-0 shadow-2xl">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold mb-2">Próximo Treino: Peito e Tríceps</h3>
              <p className="text-white/90">Hoje às 18:00 • 45 minutos</p>
            </div>
            <button className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg">
              Iniciar Treino
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

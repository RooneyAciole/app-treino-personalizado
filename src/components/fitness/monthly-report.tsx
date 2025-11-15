"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { FileText, Download, TrendingUp, Award, Target, Zap } from "lucide-react"

interface MonthlyReportProps {
  userProfile: any
}

export function MonthlyReport({ userProfile }: MonthlyReportProps) {
  const report = {
    month: "Janeiro 2024",
    workoutsCompleted: 18,
    workoutsGoal: 20,
    caloriesBurned: 6840,
    weightChange: -2.1,
    achievements: [
      { title: "Sequência de 7 dias", icon: "🔥", description: "Treinou 7 dias seguidos" },
      { title: "Meta de peso", icon: "🎯", description: "65% da meta alcançada" },
      { title: "Força aumentada", icon: "💪", description: "+15% em supino reto" }
    ],
    aiAnalysis: {
      overall: "Excelente",
      score: 85,
      insights: [
        "Você manteve consistência excepcional este mês!",
        "Perda de peso está dentro do esperado e saudável (0.5kg/semana)",
        "Ganho de força significativo em exercícios compostos",
        "Recomendação: Aumentar carga em 5% nos próximos treinos"
      ],
      areas: [
        { name: "Consistência", score: 90, color: "from-green-500 to-emerald-600" },
        { name: "Nutrição", score: 80, color: "from-blue-500 to-indigo-600" },
        { name: "Progresso", score: 85, color: "from-purple-500 to-pink-600" },
        { name: "Recuperação", score: 75, color: "from-orange-500 to-red-600" }
      ]
    }
  }

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white border-0 shadow-2xl">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold mb-2">Relatório Mensal</h2>
              <p className="text-white/90 text-lg">{report.month}</p>
            </div>
            <Button variant="secondary" className="gap-2">
              <Download className="w-4 h-4" />
              Baixar PDF
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-yellow-500" />
            Análise da IA
          </CardTitle>
          <CardDescription>Avaliação completa do seu desempenho</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between p-6 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-2xl">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Avaliação Geral</p>
              <p className="text-3xl font-bold text-green-600">{report.aiAnalysis.overall}</p>
            </div>
            <div className="text-right">
              <p className="text-5xl font-bold text-green-600">{report.aiAnalysis.score}</p>
              <p className="text-sm text-muted-foreground">de 100</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Análise por Área</h3>
            {report.aiAnalysis.areas.map((area, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{area.name}</span>
                  <span className="text-sm font-bold">{area.score}%</span>
                </div>
                <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className={`absolute inset-y-0 left-0 bg-gradient-to-r ${area.color} rounded-full transition-all duration-500`}
                    style={{ width: `${area.score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-lg">Insights da IA</h3>
            {report.aiAnalysis.insights.map((insight, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-sm">{insight}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-3">
              <FileText className="w-8 h-8 text-blue-500" />
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <p className="text-3xl font-bold mb-1">{report.workoutsCompleted}</p>
            <p className="text-sm text-muted-foreground">Treinos Completos</p>
            <Progress value={(report.workoutsCompleted / report.workoutsGoal) * 100} className="mt-3 h-2" />
          </CardContent>
        </Card>

        <Card className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-3">
              <Target className="w-8 h-8 text-orange-500" />
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <p className="text-3xl font-bold mb-1">{report.caloriesBurned}</p>
            <p className="text-sm text-muted-foreground">Calorias Queimadas</p>
            <Badge variant="secondary" className="mt-3">+12% vs mês anterior</Badge>
          </CardContent>
        </Card>

        <Card className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-3">
              <TrendingUp className="w-8 h-8 text-green-500" />
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <p className="text-3xl font-bold mb-1">{report.weightChange}kg</p>
            <p className="text-sm text-muted-foreground">Mudança de Peso</p>
            <Badge variant="secondary" className="mt-3 bg-green-100 text-green-700">Saudável</Badge>
          </CardContent>
        </Card>

        <Card className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-3">
              <Award className="w-8 h-8 text-purple-500" />
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <p className="text-3xl font-bold mb-1">{report.achievements.length}</p>
            <p className="text-sm text-muted-foreground">Conquistas</p>
            <Badge variant="secondary" className="mt-3">Novo recorde!</Badge>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="w-6 h-6 text-yellow-500" />
            Conquistas do Mês
          </CardTitle>
          <CardDescription>Suas vitórias em {report.month}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {report.achievements.map((achievement, index) => (
              <div key={index} className="p-6 bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-2xl text-center hover:scale-105 transition-all duration-300">
                <div className="text-5xl mb-3">{achievement.icon}</div>
                <h3 className="font-bold mb-2">{achievement.title}</h3>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 border-2 border-blue-500">
        <CardContent className="p-6">
          <h3 className="font-bold text-lg mb-3">🎯 Metas para o Próximo Mês</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <span>Completar 20 treinos (meta atual: 18/20)</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <span>Perder mais 2kg de forma saudável</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <span>Aumentar carga em 5% nos exercícios principais</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <span>Manter consistência de 90%+</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

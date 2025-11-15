"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { TrendingDown, TrendingUp, Calendar, Plus } from "lucide-react"

interface ProgressTrackerProps {
  userProfile: any
}

export function ProgressTracker({ userProfile }: ProgressTrackerProps) {
  const [newWeight, setNewWeight] = useState("")
  const [weightData, setWeightData] = useState([
    { date: "Sem 1", weight: parseInt(userProfile.weight) },
    { date: "Sem 2", weight: parseInt(userProfile.weight) - 0.5 },
    { date: "Sem 3", weight: parseInt(userProfile.weight) - 1.2 },
    { date: "Sem 4", weight: parseInt(userProfile.weight) - 2.1 }
  ])

  const addWeight = () => {
    if (newWeight) {
      setWeightData([...weightData, {
        date: `Sem ${weightData.length + 1}`,
        weight: parseFloat(newWeight)
      }])
      setNewWeight("")
    }
  }

  const currentWeight = weightData[weightData.length - 1].weight
  const initialWeight = parseInt(userProfile.weight)
  const weightChange = currentWeight - initialWeight
  const isLosing = weightChange < 0

  const measurements = [
    { label: "Peso Atual", value: `${currentWeight}kg`, change: `${weightChange > 0 ? '+' : ''}${weightChange.toFixed(1)}kg` },
    { label: "IMC", value: "24.2", change: "-0.8" },
    { label: "% Gordura", value: "18%", change: "-2%" },
    { label: "Massa Magra", value: "62kg", change: "+1.5kg" }
  ]

  const bodyMeasurements = [
    { part: "Peito", value: "98cm", change: "+2cm" },
    { part: "Cintura", value: "82cm", change: "-3cm" },
    { part: "Quadril", value: "95cm", change: "-2cm" },
    { part: "Braço", value: "35cm", change: "+1cm" },
    { part: "Coxa", value: "58cm", change: "+2cm" },
    { part: "Panturrilha", value: "38cm", change: "+0.5cm" }
  ]

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white border-0 shadow-2xl">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold mb-2">Seu Progresso</h2>
              <p className="text-white/90">Acompanhe sua evolução ao longo do tempo</p>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-xl px-4 py-3">
              {isLosing ? (
                <TrendingDown className="w-6 h-6 text-green-300" />
              ) : (
                <TrendingUp className="w-6 h-6 text-blue-300" />
              )}
              <div>
                <p className="text-2xl font-bold">{Math.abs(weightChange).toFixed(1)}kg</p>
                <p className="text-sm opacity-90">{isLosing ? "Perdidos" : "Ganhos"}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {measurements.map((measurement, index) => (
          <Card key={index} className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2 hover:shadow-xl transition-all duration-300">
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground mb-1">{measurement.label}</p>
              <p className="text-2xl font-bold mb-1">{measurement.value}</p>
              <p className={`text-xs font-semibold ${measurement.change.startsWith('-') || measurement.change.startsWith('+') && measurement.label !== "Massa Magra" ? 'text-green-500' : 'text-blue-500'}`}>
                {measurement.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2">
        <CardHeader>
          <CardTitle>Evolução do Peso</CardTitle>
          <CardDescription>Últimas semanas</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={weightData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis domain={['dataMin - 2', 'dataMax + 2']} />
              <Tooltip />
              <Line type="monotone" dataKey="weight" stroke="#8b5cf6" strokeWidth={3} dot={{ fill: '#8b5cf6', r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus className="w-5 h-5 text-purple-600" />
              Registrar Novo Peso
            </CardTitle>
            <CardDescription>Atualize seu progresso</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="weight">Peso atual (kg)</Label>
              <Input
                id="weight"
                type="number"
                step="0.1"
                placeholder="70.5"
                value={newWeight}
                onChange={(e) => setNewWeight(e.target.value)}
              />
            </div>
            <Button onClick={addWeight} className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              <Plus className="w-4 h-4 mr-2" />
              Adicionar Registro
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-600" />
              Medidas Corporais
            </CardTitle>
            <CardDescription>Última atualização: há 7 dias</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              {bodyMeasurements.map((measurement, index) => (
                <div key={index} className="p-3 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl">
                  <p className="text-xs text-muted-foreground mb-1">{measurement.part}</p>
                  <p className="font-bold">{measurement.value}</p>
                  <p className="text-xs text-green-600 font-semibold">{measurement.change}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 border-2 border-green-500">
        <CardContent className="p-4">
          <p className="text-sm font-semibold mb-2">📊 Análise do Progresso:</p>
          <ul className="space-y-1 text-sm">
            <li>• Você está no caminho certo! Continue assim 💪</li>
            <li>• Perda de peso consistente e saudável</li>
            <li>• Ganho de massa magra detectado</li>
            <li>• Recomendação: Mantenha o plano atual</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

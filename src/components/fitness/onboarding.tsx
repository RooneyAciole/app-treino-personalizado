"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Dumbbell, Heart, TrendingUp } from "lucide-react"

interface OnboardingProps {
  onComplete: (profile: any) => void
}

export function Onboarding({ onComplete }: OnboardingProps) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    weight: "",
    height: "",
    gender: "",
    goal: "",
    experience: "",
    plan: "basic"
  })

  const goals = [
    { id: "weight-loss", label: "Perder Peso", icon: TrendingUp, color: "from-orange-400 to-pink-600" },
    { id: "muscle-gain", label: "Ganhar Massa", icon: Dumbbell, color: "from-blue-500 to-indigo-600" },
    { id: "definition", label: "Definição", icon: Target, color: "from-purple-500 to-pink-500" },
    { id: "health", label: "Saúde", icon: Heart, color: "from-emerald-400 to-teal-600" }
  ]

  const handleSubmit = () => {
    onComplete(formData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-2xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            FitAI - Seu Personal Trainer IA
          </CardTitle>
          <CardDescription className="text-center text-lg">
            Passo {step} de 3 - Vamos montar seu plano personalizado
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {step === 1 && (
            <div className="space-y-4 animate-fade-in">
              <div className="space-y-2">
                <Label htmlFor="name">Nome</Label>
                <Input
                  id="name"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="age">Idade</Label>
                  <Input
                    id="age"
                    type="number"
                    placeholder="25"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="weight">Peso (kg)</Label>
                  <Input
                    id="weight"
                    type="number"
                    placeholder="70"
                    value={formData.weight}
                    onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="height">Altura (cm)</Label>
                  <Input
                    id="height"
                    type="number"
                    placeholder="170"
                    value={formData.height}
                    onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Gênero</Label>
                <RadioGroup value={formData.gender} onValueChange={(value) => setFormData({ ...formData, gender: value })}>
                  <div className="flex gap-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="male" id="male" />
                      <Label htmlFor="male">Masculino</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="female" id="female" />
                      <Label htmlFor="female">Feminino</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="other" />
                      <Label htmlFor="other">Outro</Label>
                    </div>
                  </div>
                </RadioGroup>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-3">
                <Label className="text-lg font-semibold">Qual seu objetivo principal?</Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {goals.map((goal) => {
                    const Icon = goal.icon
                    return (
                      <button
                        key={goal.id}
                        onClick={() => setFormData({ ...formData, goal: goal.id })}
                        className={`p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
                          formData.goal === goal.id
                            ? "border-purple-500 bg-gradient-to-br " + goal.color + " text-white shadow-2xl"
                            : "border-gray-200 dark:border-gray-700 hover:border-purple-300"
                        }`}
                      >
                        <Icon className="w-10 h-10 mx-auto mb-3" />
                        <p className="font-semibold text-lg">{goal.label}</p>
                      </button>
                    )
                  })}
                </div>
              </div>
              <div className="space-y-2">
                <Label>Nível de Experiência</Label>
                <RadioGroup value={formData.experience} onValueChange={(value) => setFormData({ ...formData, experience: value })}>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="beginner" id="beginner" />
                      <Label htmlFor="beginner">Iniciante - Nunca treinei ou treino há pouco tempo</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="intermediate" id="intermediate" />
                      <Label htmlFor="intermediate">Intermediário - Treino regularmente há alguns meses</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="advanced" id="advanced" />
                      <Label htmlFor="advanced">Avançado - Treino há mais de 1 ano consistentemente</Label>
                    </div>
                  </div>
                </RadioGroup>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-3">
                <Label className="text-lg font-semibold">Escolha seu plano</Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    onClick={() => setFormData({ ...formData, plan: "basic" })}
                    className={`p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
                      formData.plan === "basic"
                        ? "border-blue-500 bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-2xl"
                        : "border-gray-200 dark:border-gray-700 hover:border-blue-300"
                    }`}
                  >
                    <h3 className="text-2xl font-bold mb-2">Básico</h3>
                    <p className="text-sm mb-4 opacity-90">Perfeito para começar</p>
                    <ul className="text-left space-y-2 text-sm">
                      <li>✓ Treinos personalizados</li>
                      <li>✓ Plano alimentar básico</li>
                      <li>✓ Monitoramento de peso</li>
                      <li>✓ Relatórios mensais</li>
                    </ul>
                  </button>
                  <button
                    onClick={() => setFormData({ ...formData, plan: "pro" })}
                    className={`p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 relative ${
                      formData.plan === "pro"
                        ? "border-purple-500 bg-gradient-to-br from-purple-500 to-pink-600 text-white shadow-2xl"
                        : "border-gray-200 dark:border-gray-700 hover:border-purple-300"
                    }`}
                  >
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      POPULAR
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Pro</h3>
                    <p className="text-sm mb-4 opacity-90">Máximo desempenho</p>
                    <ul className="text-left space-y-2 text-sm">
                      <li>✓ Tudo do Básico +</li>
                      <li>✓ Exercícios avançados</li>
                      <li>✓ Alongamentos diários</li>
                      <li>✓ Vídeos demonstrativos</li>
                      <li>✓ Análise de forma por IA</li>
                    </ul>
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-between pt-4">
            {step > 1 && (
              <Button variant="outline" onClick={() => setStep(step - 1)}>
                Voltar
              </Button>
            )}
            {step < 3 ? (
              <Button
                onClick={() => setStep(step + 1)}
                disabled={
                  (step === 1 && (!formData.name || !formData.age || !formData.weight || !formData.height || !formData.gender)) ||
                  (step === 2 && (!formData.goal || !formData.experience))
                }
                className="ml-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                Próximo
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                className="ml-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                Começar Jornada
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

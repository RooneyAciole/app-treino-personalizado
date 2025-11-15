"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Coffee, Sun, Sunset, Moon, Apple, Flame, Droplet } from "lucide-react"

interface NutritionPlanProps {
  userProfile: any
}

export function NutritionPlan({ userProfile }: NutritionPlanProps) {
  const dailyCalories = userProfile.goal === "weight-loss" ? 1800 : userProfile.goal === "muscle-gain" ? 2800 : 2200
  const protein = userProfile.goal === "muscle-gain" ? 180 : 140
  const carbs = userProfile.goal === "weight-loss" ? 150 : 280
  const fats = userProfile.goal === "weight-loss" ? 60 : 80

  const meals = {
    breakfast: {
      icon: Coffee,
      time: "07:00 - 08:00",
      calories: Math.round(dailyCalories * 0.25),
      options: [
        {
          name: "Opção 1: Proteico",
          items: ["3 ovos mexidos", "2 fatias de pão integral", "1 banana", "Café com leite"],
          macros: { protein: 30, carbs: 45, fats: 15 }
        },
        {
          name: "Opção 2: Energético",
          items: ["Aveia com whey protein", "Frutas vermelhas", "Pasta de amendoim", "Suco natural"],
          macros: { protein: 35, carbs: 50, fats: 12 }
        }
      ]
    },
    lunch: {
      icon: Sun,
      time: "12:00 - 13:00",
      calories: Math.round(dailyCalories * 0.35),
      options: [
        {
          name: "Opção 1: Completo",
          items: ["200g de frango grelhado", "Arroz integral (1 xícara)", "Feijão", "Salada verde", "Legumes"],
          macros: { protein: 50, carbs: 60, fats: 15 }
        },
        {
          name: "Opção 2: Leve",
          items: ["Peixe grelhado (200g)", "Batata doce", "Brócolis", "Salada", "Azeite"],
          macros: { protein: 45, carbs: 55, fats: 18 }
        }
      ]
    },
    snack: {
      icon: Apple,
      time: "15:00 - 16:00",
      calories: Math.round(dailyCalories * 0.15),
      options: [
        {
          name: "Opção 1: Prático",
          items: ["Iogurte grego", "Granola", "Frutas", "Castanhas"],
          macros: { protein: 20, carbs: 30, fats: 12 }
        },
        {
          name: "Opção 2: Energético",
          items: ["Shake de whey", "Banana", "Aveia", "Pasta de amendoim"],
          macros: { protein: 25, carbs: 35, fats: 10 }
        }
      ]
    },
    dinner: {
      icon: Sunset,
      time: "19:00 - 20:00",
      calories: Math.round(dailyCalories * 0.25),
      options: [
        {
          name: "Opção 1: Leve",
          items: ["Omelete (3 ovos)", "Salada completa", "Queijo cottage", "Azeite"],
          macros: { protein: 35, carbs: 20, fats: 20 }
        },
        {
          name: "Opção 2: Proteico",
          items: ["Carne magra (150g)", "Legumes grelhados", "Salada", "Quinoa"],
          macros: { protein: 40, carbs: 25, fats: 15 }
        }
      ]
    }
  }

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white border-0 shadow-2xl">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-4">Seu Plano Alimentar Personalizado</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <Flame className="w-6 h-6 mb-2" />
              <p className="text-2xl font-bold">{dailyCalories}</p>
              <p className="text-sm opacity-90">Calorias/dia</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <p className="text-2xl font-bold">{protein}g</p>
              <p className="text-sm opacity-90">Proteínas</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <p className="text-2xl font-bold">{carbs}g</p>
              <p className="text-sm opacity-90">Carboidratos</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <p className="text-2xl font-bold">{fats}g</p>
              <p className="text-sm opacity-90">Gorduras</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {Object.entries(meals).map(([key, meal]) => {
          const Icon = meal.icon
          return (
            <Card key={key} className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  {key === "breakfast" && "Café da Manhã"}
                  {key === "lunch" && "Almoço"}
                  {key === "snack" && "Lanche"}
                  {key === "dinner" && "Jantar"}
                </CardTitle>
                <CardDescription className="flex items-center justify-between">
                  <span>{meal.time}</span>
                  <Badge variant="secondary">{meal.calories} kcal</Badge>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="option1" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="option1">Opção 1</TabsTrigger>
                    <TabsTrigger value="option2">Opção 2</TabsTrigger>
                  </TabsList>
                  {meal.options.map((option, index) => (
                    <TabsContent key={index} value={`option${index + 1}`} className="space-y-3">
                      <h4 className="font-semibold text-sm text-muted-foreground">{option.name}</h4>
                      <ul className="space-y-2">
                        {option.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="flex gap-2 pt-2">
                        <Badge variant="outline" className="text-xs">P: {option.macros.protein}g</Badge>
                        <Badge variant="outline" className="text-xs">C: {option.macros.carbs}g</Badge>
                        <Badge variant="outline" className="text-xs">G: {option.macros.fats}g</Badge>
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Card className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Droplet className="w-5 h-5 text-blue-500" />
            Hidratação
          </CardTitle>
          <CardDescription>Essencial para seus resultados</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="p-4 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-xl">
            <p className="font-semibold mb-2">Meta diária: 2.5 - 3 litros de água</p>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Beba água ao acordar (500ml)</li>
              <li>• Mantenha uma garrafa sempre por perto</li>
              <li>• Beba antes, durante e após o treino</li>
              <li>• Aumente a ingestão em dias quentes</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 border-2 border-yellow-500">
        <CardContent className="p-4">
          <p className="text-sm font-semibold mb-2">💡 Dicas Importantes:</p>
          <ul className="space-y-1 text-sm">
            <li>• Faça refeições a cada 3-4 horas</li>
            <li>• Priorize alimentos naturais e minimamente processados</li>
            <li>• Prepare suas refeições com antecedência</li>
            <li>• Evite pular refeições, especialmente o café da manhã</li>
            <li>• Permita-se uma refeição livre por semana</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

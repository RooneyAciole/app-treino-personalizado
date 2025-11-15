"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Video, Upload, CheckCircle2, AlertCircle, Info, Play } from "lucide-react"

interface VideoAnalysisProps {
  userProfile: any
}

export function VideoAnalysis({ userProfile }: VideoAnalysisProps) {
  const [analyzing, setAnalyzing] = useState(false)
  const [analysis, setAnalysis] = useState<any>(null)
  const [showDemo, setShowDemo] = useState(true)

  const handleVideoUpload = () => {
    setAnalyzing(true)
    setShowDemo(false)
    // Simula análise da IA
    setTimeout(() => {
      setAnalysis({
        exercise: "Supino Reto",
        score: 85,
        feedback: {
          correct: [
            "Pegada na largura correta",
            "Descida controlada",
            "Boa amplitude de movimento"
          ],
          improvements: [
            "Mantenha os cotovelos mais próximos ao corpo",
            "Empurre a barra em linha reta, não em arco",
            "Contraia o abdômen durante todo o movimento"
          ],
          warnings: [
            "Atenção: Coluna lombar está arqueando demais"
          ]
        }
      })
      setAnalyzing(false)
    }, 3000)
  }

  const previousAnalyses = [
    {
      exercise: "Agachamento",
      date: "Há 2 dias",
      score: 90,
      status: "excellent"
    },
    {
      exercise: "Levantamento Terra",
      date: "Há 5 dias",
      score: 78,
      status: "good"
    },
    {
      exercise: "Desenvolvimento",
      date: "Há 1 semana",
      score: 82,
      status: "good"
    }
  ]

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-br from-pink-600 to-purple-600 text-white border-0 shadow-2xl">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
              <Video className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Análise de Forma por IA</h2>
              <p className="text-white/90">Recurso exclusivo do Plano Pro ⭐</p>
            </div>
          </div>
          <p className="text-white/90">
            Grave um vídeo executando o exercício e nossa IA vai analisar sua forma, postura e técnica em tempo real!
          </p>
        </CardContent>
      </Card>

      {/* Vídeo Demonstrativo Animado */}
      {showDemo && (
        <Card className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 border-2 border-purple-500 shadow-xl overflow-hidden">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Play className="w-5 h-5 text-purple-600" />
              Demonstração: Forma Correta
            </CardTitle>
            <CardDescription>Supino Reto - Técnica Ideal</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 overflow-hidden" style={{ height: '320px' }}>
              {/* Fundo com grid */}
              <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div key={i} className="border border-white/20" />
                  ))}
                </div>
              </div>

              {/* Banco de supino */}
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-48 h-4 bg-gradient-to-r from-gray-600 to-gray-700 rounded-lg shadow-2xl" />
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-12 h-8 bg-gradient-to-r from-gray-700 to-gray-800 rounded-t-lg" />

              {/* Pessoa (boneco de palito animado) */}
              <div className="absolute bottom-16 left-1/2 -translate-x-1/2">
                {/* Cabeça */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 border-2 border-orange-600" />
                
                {/* Corpo */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-12 bg-gradient-to-b from-blue-400 to-blue-500" />
                
                {/* Braços (animados) */}
                <div className="exercise-arms-up absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-500 origin-center" style={{ animation: 'benchPress 3s ease-in-out infinite' }} />
                
                {/* Pernas */}
                <div className="absolute top-12 left-1/2 -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-blue-400 to-blue-500 rotate-12" />
                <div className="absolute top-12 left-1/2 -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-blue-400 to-blue-500 -rotate-12" />
              </div>

              {/* Barra (animada) */}
              <div className="absolute left-1/2 -translate-x-1/2" style={{ animation: 'barMovement 3s ease-in-out infinite' }}>
                <div className="w-32 h-2 bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400 rounded-full shadow-lg" />
                {/* Anilhas */}
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-3 h-6 bg-gradient-to-r from-red-600 to-red-700 rounded-sm" />
                <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-3 h-6 bg-gradient-to-r from-red-600 to-red-700 rounded-sm" />
              </div>

              {/* Indicadores de movimento */}
              <div className="absolute top-4 right-4 space-y-2">
                <div className="flex items-center gap-2 text-green-400 text-xs font-semibold">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Descida Controlada
                </div>
                <div className="flex items-center gap-2 text-blue-400 text-xs font-semibold">
                  <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" style={{ animationDelay: '1.5s' }} />
                  Subida Explosiva
                </div>
              </div>

              {/* Contador de repetições */}
              <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-xl">
                <p className="text-white text-sm font-bold">Repetição contínua</p>
              </div>

              {/* Setas indicativas */}
              <div className="absolute top-20 left-1/2 -translate-x-1/2 flex flex-col items-center" style={{ animation: 'arrowBounce 3s ease-in-out infinite' }}>
                <div className="text-yellow-400 text-2xl">↓</div>
              </div>
            </div>

            <div className="mt-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl">
              <p className="text-sm font-semibold mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                Pontos-chave da execução:
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Desça a barra de forma controlada até o peito</li>
                <li>• Mantenha os cotovelos em ângulo de 45°</li>
                <li>• Empurre a barra para cima de forma explosiva</li>
                <li>• Mantenha os pés firmes no chão</li>
                <li>• Coluna lombar levemente arqueada</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      )}

      <Card className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2">
        <CardHeader>
          <CardTitle>Enviar Novo Vídeo</CardTitle>
          <CardDescription>Grave ou selecione um vídeo do seu exercício</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-2xl p-12 text-center hover:border-purple-500 transition-all duration-300">
            <Video className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
            <p className="text-lg font-semibold mb-2">Arraste um vídeo ou clique para selecionar</p>
            <p className="text-sm text-muted-foreground mb-4">Formatos: MP4, MOV, AVI • Máx: 100MB</p>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              <Upload className="w-4 h-4 mr-2" />
              Selecionar Vídeo
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4">
            <div className="h-px bg-gray-300 dark:bg-gray-700 flex-1" />
            <span className="text-sm text-muted-foreground">ou</span>
            <div className="h-px bg-gray-300 dark:bg-gray-700 flex-1" />
          </div>

          <Button
            onClick={handleVideoUpload}
            disabled={analyzing}
            className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700"
          >
            {analyzing ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                Analisando...</>
            ) : (
              <>
                <Video className="w-4 h-4 mr-2" />
                Gravar Vídeo Agora
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {analysis && (
        <Card className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2 border-purple-500 shadow-2xl animate-fade-in">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
                Análise Completa
              </CardTitle>
              <Badge className="text-lg px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600">
                {analysis.score}/100
              </Badge>
            </div>
            <CardDescription>Exercício: {analysis.exercise}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-3">
                <h3 className="font-semibold text-lg flex items-center gap-2 text-green-600">
                  <CheckCircle2 className="w-5 h-5" />
                  Pontos Positivos
                </h3>
                {analysis.feedback.correct.map((item: string, index: number) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-xl">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm">{item}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-lg flex items-center gap-2 text-blue-600">
                  <Info className="w-5 h-5" />
                  Pontos de Melhoria
                </h3>
                {analysis.feedback.improvements.map((item: string, index: number) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl">
                    <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm">{item}</p>
                  </div>
                ))}
              </div>

              {analysis.feedback.warnings.length > 0 && (
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg flex items-center gap-2 text-orange-600">
                    <AlertCircle className="w-5 h-5" />
                    Atenção
                  </h3>
                  {analysis.feedback.warnings.map((item: string, index: number) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 rounded-xl">
                      <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="p-4 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl">
              <p className="text-sm font-semibold mb-2">💡 Recomendação da IA:</p>
              <p className="text-sm">
                Sua execução está boa! Foque em corrigir a posição dos cotovelos e manter a coluna neutra. 
                Com essas correções, você pode aumentar a carga em 5kg no próximo treino.
              </p>
            </div>

            <Button 
              onClick={() => {
                setAnalysis(null)
                setShowDemo(true)
              }}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              Analisar Outro Vídeo
            </Button>
          </CardContent>
        </Card>
      )}

      <Card className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2">
        <CardHeader>
          <CardTitle>Análises Anteriores</CardTitle>
          <CardDescription>Histórico das suas análises</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {previousAnalyses.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-xl hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <Video className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">{item.exercise}</p>
                    <p className="text-sm text-muted-foreground">{item.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge className={`${item.score >= 85 ? 'bg-green-500' : 'bg-blue-500'}`}>
                    {item.score}/100
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 border-2 border-yellow-500">
        <CardContent className="p-4">
          <p className="text-sm font-semibold mb-2">📹 Dicas para Gravação:</p>
          <ul className="space-y-1 text-sm">
            <li>• Grave de lado para melhor visualização da forma</li>
            <li>• Certifique-se de que todo o corpo está visível</li>
            <li>• Use boa iluminação</li>
            <li>• Grave pelo menos 3 repetições completas</li>
            <li>• Mantenha a câmera estável</li>
          </ul>
        </CardContent>
      </Card>

      <style jsx>{`
        @keyframes benchPress {
          0%, 100% {
            transform: translateY(0) translateX(-50%);
          }
          50% {
            transform: translateY(-40px) translateX(-50%);
          }
        }

        @keyframes barMovement {
          0%, 100% {
            top: 80px;
          }
          50% {
            top: 40px;
          }
        }

        @keyframes arrowBounce {
          0%, 100% {
            opacity: 1;
            transform: translateY(0) translateX(-50%);
          }
          50% {
            opacity: 0.3;
            transform: translateY(10px) translateX(-50%);
          }
        }
      `}</style>
    </div>
  )
}

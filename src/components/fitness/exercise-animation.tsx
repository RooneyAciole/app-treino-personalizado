"use client"

import { useEffect, useState } from "react"

interface ExerciseAnimationProps {
  exerciseId: string
  exerciseName: string
}

export function ExerciseAnimation({ exerciseId, exerciseName }: ExerciseAnimationProps) {
  const [frame, setFrame] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prev) => (prev + 1) % 60)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  const getAnimationData = (id: string) => {
    const animations: Record<string, any> = {
      "supino-reto": {
        muscles: ["Peitoral Maior", "Tríceps", "Deltoides Anterior"],
        color: "from-red-500 to-orange-500",
        description: "Deite no banco, desça a barra até o peito e empurre para cima"
      },
      "supino-inclinado": {
        muscles: ["Peitoral Superior", "Deltoides Anterior", "Tríceps"],
        color: "from-red-400 to-orange-400",
        description: "Banco inclinado 30-45°, movimento similar ao supino reto"
      },
      "crucifixo": {
        muscles: ["Peitoral Maior", "Deltoides Anterior"],
        color: "from-red-500 to-pink-500",
        description: "Abra os braços em arco e feche na linha do peito"
      },
      "triceps-testa": {
        muscles: ["Tríceps (cabeça longa)", "Antebraços"],
        color: "from-blue-500 to-cyan-500",
        description: "Deitado, desça a barra até a testa e estenda os braços"
      },
      "triceps-corda": {
        muscles: ["Tríceps (cabeça lateral)", "Antebraços"],
        color: "from-blue-400 to-cyan-400",
        description: "Puxe a corda para baixo e abra as pontas no final"
      },
      "supino-declinado": {
        muscles: ["Peitoral Inferior", "Tríceps"],
        color: "from-red-600 to-orange-600",
        description: "Banco declinado, movimento controlado até o peito"
      },
      "mergulho": {
        muscles: ["Peitoral Inferior", "Tríceps", "Deltoides"],
        color: "from-purple-500 to-pink-500",
        description: "Desça o corpo entre as paralelas e empurre para cima"
      },
      "barra-fixa": {
        muscles: ["Grande Dorsal", "Bíceps", "Trapézio"],
        color: "from-green-500 to-emerald-500",
        description: "Puxe o corpo até o queixo passar a barra"
      },
      "remada-curvada": {
        muscles: ["Grande Dorsal", "Trapézio", "Romboides"],
        color: "from-green-600 to-teal-600",
        description: "Incline o tronco e puxe a barra até o abdômen"
      },
      "puxada-frontal": {
        muscles: ["Grande Dorsal", "Bíceps", "Deltoides Posterior"],
        color: "from-green-400 to-emerald-400",
        description: "Puxe a barra até a altura do peito"
      },
      "rosca-direta": {
        muscles: ["Bíceps Braquial", "Braquial"],
        color: "from-indigo-500 to-blue-500",
        description: "Flexione os cotovelos mantendo-os fixos"
      },
      "rosca-martelo": {
        muscles: ["Bíceps", "Braquiorradial", "Braquial"],
        color: "from-indigo-400 to-blue-400",
        description: "Pegada neutra, flexione os cotovelos"
      },
      "remada-unilateral": {
        muscles: ["Grande Dorsal", "Trapézio", "Romboides"],
        color: "from-green-700 to-teal-700",
        description: "Apoie um joelho no banco e puxe o halter"
      },
      "rosca-concentrada": {
        muscles: ["Bíceps Braquial (pico)"],
        color: "from-indigo-600 to-blue-600",
        description: "Sentado, cotovelo apoiado na coxa interna"
      },
      "agachamento": {
        muscles: ["Quadríceps", "Glúteos", "Isquiotibiais"],
        color: "from-yellow-500 to-orange-500",
        description: "Desça até coxas paralelas ao chão, costas retas"
      },
      "leg-press": {
        muscles: ["Quadríceps", "Glúteos"],
        color: "from-yellow-400 to-orange-400",
        description: "Empurre a plataforma com os pés na largura dos ombros"
      },
      "extensora": {
        muscles: ["Quadríceps (isolado)"],
        color: "from-yellow-600 to-amber-600",
        description: "Estenda as pernas contra a resistência"
      },
      "flexora": {
        muscles: ["Isquiotibiais", "Panturrilhas"],
        color: "from-amber-500 to-orange-500",
        description: "Flexione as pernas trazendo os calcanhares aos glúteos"
      },
      "panturrilha": {
        muscles: ["Gastrocnêmio", "Sóleo"],
        color: "from-orange-500 to-red-500",
        description: "Eleve os calcanhares o máximo possível"
      },
      "bulgaro": {
        muscles: ["Quadríceps", "Glúteos", "Estabilizadores"],
        color: "from-yellow-700 to-orange-700",
        description: "Perna traseira elevada, agache com a perna da frente"
      },
      "stiff": {
        muscles: ["Isquiotibiais", "Glúteos", "Lombar"],
        color: "from-amber-600 to-red-600",
        description: "Desça a barra mantendo pernas semi-flexionadas"
      },
      "desenvolvimento": {
        muscles: ["Deltoides", "Tríceps", "Trapézio Superior"],
        color: "from-purple-500 to-violet-500",
        description: "Empurre a barra acima da cabeça"
      },
      "elevacao-lateral": {
        muscles: ["Deltoides Lateral"],
        color: "from-purple-400 to-violet-400",
        description: "Eleve os halteres lateralmente até a altura dos ombros"
      },
      "elevacao-frontal": {
        muscles: ["Deltoides Anterior"],
        color: "from-purple-600 to-violet-600",
        description: "Eleve os halteres à frente até a altura dos ombros"
      },
      "abdominal": {
        muscles: ["Reto Abdominal", "Oblíquos"],
        color: "from-pink-500 to-rose-500",
        description: "Flexione o tronco em direção aos joelhos"
      },
      "prancha": {
        muscles: ["Core Completo", "Estabilizadores"],
        color: "from-pink-400 to-rose-400",
        description: "Mantenha o corpo reto em isometria"
      },
      "remada-alta": {
        muscles: ["Trapézio", "Deltoides Lateral"],
        color: "from-purple-700 to-violet-700",
        description: "Puxe a barra até a altura do queixo"
      },
      "canivete": {
        muscles: ["Reto Abdominal", "Flexores do Quadril"],
        color: "from-pink-600 to-rose-600",
        description: "Eleve pernas e tronco simultaneamente"
      },
      "burpees": {
        muscles: ["Corpo Todo", "Cardio"],
        color: "from-red-500 to-pink-500",
        description: "Agache, prancha, flexão, pule"
      },
      "flexao": {
        muscles: ["Peitoral", "Tríceps", "Core"],
        color: "from-red-400 to-pink-400",
        description: "Desça o corpo até quase tocar o chão"
      },
      "agachamento-jump": {
        muscles: ["Quadríceps", "Glúteos", "Explosão"],
        color: "from-yellow-500 to-red-500",
        description: "Agache e salte explosivamente"
      },
      "mountain-climbers": {
        muscles: ["Core", "Cardio", "Ombros"],
        color: "from-orange-500 to-red-500",
        description: "Alterne joelhos ao peito em ritmo acelerado"
      },
      "prancha-lateral": {
        muscles: ["Oblíquos", "Core Lateral"],
        color: "from-pink-500 to-purple-500",
        description: "Mantenha o corpo lateral em linha reta"
      },
      "muscle-up": {
        muscles: ["Dorsal", "Peitoral", "Tríceps", "Core"],
        color: "from-purple-600 to-pink-600",
        description: "Puxe e empurre o corpo acima da barra"
      },
      "pistol-squat": {
        muscles: ["Quadríceps", "Glúteos", "Equilíbrio"],
        color: "from-yellow-600 to-red-600",
        description: "Agachamento em uma perna só"
      }
    }

    return animations[id] || {
      muscles: ["Músculos Diversos"],
      color: "from-gray-500 to-gray-600",
      description: "Execute o movimento com controle"
    }
  }

  const data = getAnimationData(exerciseId)
  const progress = (Math.sin(frame / 10) + 1) / 2

  // Animação do boneco baseada no tipo de exercício
  const renderStickFigure = () => {
    const isUpperBody = ["supino", "crucifixo", "triceps", "barra", "remada", "puxada", "rosca", "desenvolvimento", "elevacao", "flexao"].some(ex => exerciseId.includes(ex))
    const isLowerBody = ["agachamento", "leg-press", "extensora", "flexora", "panturrilha", "bulgaro", "stiff"].some(ex => exerciseId.includes(ex))
    const isCore = ["abdominal", "prancha", "canivete"].some(ex => exerciseId.includes(ex))
    const isFullBody = ["burpees", "mountain", "muscle-up", "pistol"].some(ex => exerciseId.includes(ex))

    // Posições base
    const headY = 30
    const bodyTop = 45
    const bodyBottom = 90
    const armLength = 35
    const legLength = 45

    if (isUpperBody) {
      // Movimento de empurrar/puxar
      const armAngle = progress * 60 - 30
      const armY = bodyTop + Math.sin(progress * Math.PI) * 15
      
      return (
        <g>
          {/* Cabeça */}
          <circle cx="200" cy={headY} r="12" fill="#FFF" stroke="#333" strokeWidth="2" />
          
          {/* Corpo */}
          <line x1="200" y1={bodyTop} x2="200" y2={bodyBottom} stroke="#333" strokeWidth="3" />
          
          {/* Braços (movimento) */}
          <line 
            x1="200" y1={bodyTop + 10} 
            x2={200 - Math.cos(armAngle * Math.PI / 180) * armLength} 
            y2={armY} 
            stroke="#333" strokeWidth="3" 
          />
          <line 
            x1="200" y1={bodyTop + 10} 
            x2={200 + Math.cos(armAngle * Math.PI / 180) * armLength} 
            y2={armY} 
            stroke="#333" strokeWidth="3" 
          />
          
          {/* Antebraços */}
          <line 
            x1={200 - Math.cos(armAngle * Math.PI / 180) * armLength} 
            y1={armY} 
            x2={200 - Math.cos(armAngle * Math.PI / 180) * armLength - 10} 
            y2={armY + 25} 
            stroke="#333" strokeWidth="3" 
          />
          <line 
            x1={200 + Math.cos(armAngle * Math.PI / 180) * armLength} 
            y1={armY} 
            x2={200 + Math.cos(armAngle * Math.PI / 180) * armLength + 10} 
            y2={armY + 25} 
            stroke="#333" strokeWidth="3" 
          />
          
          {/* Pernas */}
          <line x1="200" y1={bodyBottom} x2="180" y2={bodyBottom + legLength} stroke="#333" strokeWidth="3" />
          <line x1="200" y1={bodyBottom} x2="220" y2={bodyBottom + legLength} stroke="#333" strokeWidth="3" />
          
          {/* Músculos destacados */}
          <circle cx="185" cy={bodyTop + 15} r="8" fill={`url(#muscle-glow-${progress > 0.5 ? 'active' : 'inactive'})`} opacity="0.7" />
          <circle cx="215" cy={bodyTop + 15} r="8" fill={`url(#muscle-glow-${progress > 0.5 ? 'active' : 'inactive'})`} opacity="0.7" />
        </g>
      )
    }

    if (isLowerBody) {
      // Movimento de agachamento
      const squatDepth = progress * 40
      const kneeAngle = progress * 90
      
      return (
        <g>
          {/* Cabeça */}
          <circle cx="200" cy={headY + squatDepth} r="12" fill="#FFF" stroke="#333" strokeWidth="2" />
          
          {/* Corpo */}
          <line x1="200" y1={bodyTop + squatDepth} x2="200" y2={bodyBottom + squatDepth} stroke="#333" strokeWidth="3" />
          
          {/* Braços */}
          <line x1="200" y1={bodyTop + 10 + squatDepth} x2="170" y2={bodyTop + 30 + squatDepth} stroke="#333" strokeWidth="3" />
          <line x1="200" y1={bodyTop + 10 + squatDepth} x2="230" y2={bodyTop + 30 + squatDepth} stroke="#333" strokeWidth="3" />
          
          {/* Pernas (agachamento) */}
          <line 
            x1="200" y1={bodyBottom + squatDepth} 
            x2={180 - Math.sin(kneeAngle * Math.PI / 180) * 20} 
            y2={bodyBottom + squatDepth + legLength - squatDepth} 
            stroke="#333" strokeWidth="3" 
          />
          <line 
            x1="200" y1={bodyBottom + squatDepth} 
            x2={220 + Math.sin(kneeAngle * Math.PI / 180) * 20} 
            y2={bodyBottom + squatDepth + legLength - squatDepth} 
            stroke="#333" strokeWidth="3" 
          />
          
          {/* Músculos das pernas destacados */}
          <ellipse cx="180" cy={bodyBottom + squatDepth + 20} rx="12" ry="20" fill={`url(#muscle-glow-${progress > 0.3 ? 'active' : 'inactive'})`} opacity="0.7" />
          <ellipse cx="220" cy={bodyBottom + squatDepth + 20} rx="12" ry="20" fill={`url(#muscle-glow-${progress > 0.3 ? 'active' : 'inactive'})`} opacity="0.7" />
        </g>
      )
    }

    if (isCore) {
      // Movimento de prancha/abdominal
      const crunchAngle = progress * 45
      
      return (
        <g>
          {/* Cabeça */}
          <circle cx="200" cy={headY + Math.sin(crunchAngle * Math.PI / 180) * 15} r="12" fill="#FFF" stroke="#333" strokeWidth="2" />
          
          {/* Corpo (curvado) */}
          <path 
            d={`M 200 ${bodyTop + Math.sin(crunchAngle * Math.PI / 180) * 15} Q 200 ${bodyBottom - 20} 200 ${bodyBottom}`} 
            stroke="#333" strokeWidth="3" fill="none" 
          />
          
          {/* Braços */}
          <line x1="200" y1={bodyTop + 10} x2="170" y2={bodyTop + 25} stroke="#333" strokeWidth="3" />
          <line x1="200" y1={bodyTop + 10} x2="230" y2={bodyTop + 25} stroke="#333" strokeWidth="3" />
          
          {/* Pernas */}
          <line x1="200" y1={bodyBottom} x2="180" y2={bodyBottom + legLength} stroke="#333" strokeWidth="3" />
          <line x1="200" y1={bodyBottom} x2="220" y2={bodyBottom + legLength} stroke="#333" strokeWidth="3" />
          
          {/* Core destacado */}
          <ellipse cx="200" cy={bodyTop + 30} rx="15" ry="25" fill={`url(#muscle-glow-${progress > 0.4 ? 'active' : 'inactive'})`} opacity="0.7" />
        </g>
      )
    }

    // Full body - movimento dinâmico
    const jumpHeight = Math.sin(progress * Math.PI) * 30
    
    return (
      <g>
        {/* Cabeça */}
        <circle cx="200" cy={headY - jumpHeight} r="12" fill="#FFF" stroke="#333" strokeWidth="2" />
        
        {/* Corpo */}
        <line x1="200" y1={bodyTop - jumpHeight} x2="200" y2={bodyBottom - jumpHeight} stroke="#333" strokeWidth="3" />
        
        {/* Braços (movimento dinâmico) */}
        <line 
          x1="200" y1={bodyTop + 10 - jumpHeight} 
          x2={170 - Math.sin(progress * Math.PI * 2) * 20} 
          y2={bodyTop + 30 - jumpHeight + Math.cos(progress * Math.PI * 2) * 15} 
          stroke="#333" strokeWidth="3" 
        />
        <line 
          x1="200" y1={bodyTop + 10 - jumpHeight} 
          x2={230 + Math.sin(progress * Math.PI * 2) * 20} 
          y2={bodyTop + 30 - jumpHeight + Math.cos(progress * Math.PI * 2) * 15} 
          stroke="#333" strokeWidth="3" 
        />
        
        {/* Pernas */}
        <line 
          x1="200" y1={bodyBottom - jumpHeight} 
          x2={180 - Math.sin(progress * Math.PI) * 15} 
          y2={bodyBottom + legLength - jumpHeight} 
          stroke="#333" strokeWidth="3" 
        />
        <line 
          x1="200" y1={bodyBottom - jumpHeight} 
          x2={220 + Math.sin(progress * Math.PI) * 15} 
          y2={bodyBottom + legLength - jumpHeight} 
          stroke="#333" strokeWidth="3" 
        />
        
        {/* Corpo todo destacado */}
        <ellipse cx="200" cy={bodyTop + 30 - jumpHeight} rx="18" ry="35" fill={`url(#muscle-glow-active)`} opacity="0.5" />
      </g>
    )
  }

  return (
    <div className="space-y-4">
      {/* Área de animação */}
      <div className={`relative w-full aspect-video bg-gradient-to-br ${data.color} rounded-2xl overflow-hidden shadow-2xl`}>
        {/* Grid de fundo */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* SVG da animação */}
        <svg viewBox="0 0 400 200" className="w-full h-full">
          <defs>
            {/* Gradiente para músculos ativos */}
            <radialGradient id="muscle-glow-active">
              <stop offset="0%" stopColor="#ff0000" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ff0000" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="muscle-glow-inactive">
              <stop offset="0%" stopColor="#ffaa00" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#ffaa00" stopOpacity="0" />
            </radialGradient>
          </defs>

          {renderStickFigure()}

          {/* Indicadores de movimento */}
          <g opacity={0.3 + progress * 0.4}>
            <circle cx="200" cy="100" r={60 + progress * 20} fill="none" stroke="white" strokeWidth="2" strokeDasharray="5,5" />
          </g>

          {/* Setas de direção */}
          {progress > 0.5 ? (
            <g>
              <path d="M 350 90 L 370 100 L 350 110" fill="none" stroke="white" strokeWidth="3" opacity="0.8" />
              <text x="320" y="105" fill="white" fontSize="14" fontWeight="bold">EMPURRE</text>
            </g>
          ) : (
            <g>
              <path d="M 370 90 L 350 100 L 370 110" fill="none" stroke="white" strokeWidth="3" opacity="0.8" />
              <text x="320" y="105" fill="white" fontSize="14" fontWeight="bold">RETORNE</text>
            </g>
          )}
        </svg>

        {/* Contador de repetições */}
        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-xl">
          <p className="text-white font-bold text-lg">Rep: {Math.floor(frame / 30) + 1}</p>
        </div>

        {/* Barra de progresso do movimento */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-white/20 backdrop-blur-sm rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-white transition-all duration-100"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Informações do exercício */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Músculos trabalhados */}
        <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 p-4 rounded-xl border-2 border-red-200 dark:border-red-800">
          <h4 className="font-bold text-sm mb-2 flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
            Músculos Ativados
          </h4>
          <ul className="space-y-1">
            {data.muscles.map((muscle: string, index: number) => (
              <li key={index} className="text-sm flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full" />
                {muscle}
              </li>
            ))}
          </ul>
        </div>

        {/* Descrição da execução */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-4 rounded-xl border-2 border-blue-200 dark:border-blue-800">
          <h4 className="font-bold text-sm mb-2 flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full" />
            Como Executar
          </h4>
          <p className="text-sm text-muted-foreground">{data.description}</p>
        </div>
      </div>

      {/* Dicas importantes */}
      <div className="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-950/30 dark:to-amber-950/30 p-4 rounded-xl border-2 border-yellow-300 dark:border-yellow-700">
        <h4 className="font-bold text-sm mb-2 flex items-center gap-2">
          💡 Dicas Importantes
        </h4>
        <ul className="space-y-1 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-yellow-600 dark:text-yellow-400">•</span>
            <span>Mantenha a postura correta durante todo o movimento</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-yellow-600 dark:text-yellow-400">•</span>
            <span>Controle a respiração: expire no esforço, inspire no retorno</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-yellow-600 dark:text-yellow-400">•</span>
            <span>Execute o movimento de forma controlada, sem usar impulso</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-yellow-600 dark:text-yellow-400">•</span>
            <span>Sinta o músculo trabalhando durante toda a execução</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

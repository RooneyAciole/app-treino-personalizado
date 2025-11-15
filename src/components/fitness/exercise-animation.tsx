"use client"

import { useState } from "react"
import { Play, Pause, RotateCcw } from "lucide-react"

interface ExerciseAnimationProps {
  exerciseId: string
  exerciseName: string
}

export function ExerciseAnimation({ exerciseId, exerciseName }: ExerciseAnimationProps) {
  const [isPlaying, setIsPlaying] = useState(true)

  const getExerciseData = (id: string) => {
    const exercises: Record<string, any> = {
      "supino-reto": {
        video: "https://www.youtube.com/embed/rT7DgCr-3pg?autoplay=1&loop=1&playlist=rT7DgCr-3pg&controls=0&modestbranding=1&rel=0",
        muscles: ["Peitoral Maior", "Tríceps", "Deltoides Anterior"],
        color: "from-red-500 to-orange-500",
        description: "Deite no banco, desça a barra até o peito e empurre para cima",
        tips: [
          "Mantenha os pés firmes no chão",
          "Desça a barra de forma controlada até tocar o peito",
          "Empurre explosivamente para cima",
          "Mantenha os cotovelos a 45° do corpo"
        ]
      },
      "supino-inclinado": {
        video: "https://www.youtube.com/embed/SrqOu55lrYU?autoplay=1&loop=1&playlist=SrqOu55lrYU&controls=0&modestbranding=1&rel=0",
        muscles: ["Peitoral Superior", "Deltoides Anterior", "Tríceps"],
        color: "from-red-400 to-orange-400",
        description: "Banco inclinado 30-45°, movimento similar ao supino reto",
        tips: [
          "Ajuste o banco entre 30-45 graus",
          "Foque na contração do peitoral superior",
          "Não arqueie excessivamente as costas"
        ]
      },
      "crucifixo": {
        video: "https://www.youtube.com/embed/eozdVDA78K0?autoplay=1&loop=1&playlist=eozdVDA78K0&controls=0&modestbranding=1&rel=0",
        muscles: ["Peitoral Maior", "Deltoides Anterior"],
        color: "from-red-500 to-pink-500",
        description: "Abra os braços em arco e feche na linha do peito",
        tips: [
          "Mantenha leve flexão nos cotovelos",
          "Sinta o alongamento no peitoral",
          "Não desça além da linha dos ombros"
        ]
      },
      "triceps-testa": {
        video: "https://www.youtube.com/embed/d_KZxkY_0cM?autoplay=1&loop=1&playlist=d_KZxkY_0cM&controls=0&modestbranding=1&rel=0",
        muscles: ["Tríceps (cabeça longa)", "Antebraços"],
        color: "from-blue-500 to-cyan-500",
        description: "Deitado, desça a barra até a testa e estenda os braços",
        tips: [
          "Mantenha os cotovelos fixos e apontando para cima",
          "Desça controladamente até próximo à testa",
          "Estenda completamente os braços no topo"
        ]
      },
      "triceps-corda": {
        video: "https://www.youtube.com/embed/kiuVA0gs3EI?autoplay=1&loop=1&playlist=kiuVA0gs3EI&controls=0&modestbranding=1&rel=0",
        muscles: ["Tríceps (cabeça lateral)", "Antebraços"],
        color: "from-blue-400 to-cyan-400",
        description: "Puxe a corda para baixo e abra as pontas no final",
        tips: [
          "Mantenha os cotovelos colados ao corpo",
          "Abra as pontas da corda no final do movimento",
          "Contraia o tríceps no ponto máximo"
        ]
      },
      "barra-fixa": {
        video: "https://www.youtube.com/embed/eGo4IYlbE5g?autoplay=1&loop=1&playlist=eGo4IYlbE5g&controls=0&modestbranding=1&rel=0",
        muscles: ["Grande Dorsal", "Bíceps", "Trapézio"],
        color: "from-green-500 to-emerald-500",
        description: "Puxe o corpo até o queixo passar a barra",
        tips: [
          "Use pegada pronada (palmas para frente)",
          "Puxe com as costas, não apenas com os braços",
          "Desça controladamente até extensão completa"
        ]
      },
      "remada-curvada": {
        video: "https://www.youtube.com/embed/FWJR5Ve8bnQ?autoplay=1&loop=1&playlist=FWJR5Ve8bnQ&controls=0&modestbranding=1&rel=0",
        muscles: ["Grande Dorsal", "Trapézio", "Romboides"],
        color: "from-green-600 to-teal-600",
        description: "Incline o tronco e puxe a barra até o abdômen",
        tips: [
          "Mantenha as costas retas e core contraído",
          "Puxe a barra em direção ao umbigo",
          "Contraia as escápulas no topo do movimento"
        ]
      },
      "puxada-frontal": {
        video: "https://www.youtube.com/embed/CAwf7n6Luuc?autoplay=1&loop=1&playlist=CAwf7n6Luuc&controls=0&modestbranding=1&rel=0",
        muscles: ["Grande Dorsal", "Bíceps", "Deltoides Posterior"],
        color: "from-green-400 to-emerald-400",
        description: "Puxe a barra até a altura do peito",
        tips: [
          "Incline levemente o tronco para trás",
          "Puxe com as costas, focando nos dorsais",
          "Evite usar muito os braços"
        ]
      },
      "rosca-direta": {
        video: "https://www.youtube.com/embed/ykJmrZ5v0Oo?autoplay=1&loop=1&playlist=ykJmrZ5v0Oo&controls=0&modestbranding=1&rel=0",
        muscles: ["Bíceps Braquial", "Braquial"],
        color: "from-indigo-500 to-blue-500",
        description: "Flexione os cotovelos mantendo-os fixos",
        tips: [
          "Mantenha os cotovelos colados ao corpo",
          "Não balance o corpo para ajudar",
          "Contraia o bíceps no topo do movimento"
        ]
      },
      "rosca-martelo": {
        video: "https://www.youtube.com/embed/zC3nLlEvin4?autoplay=1&loop=1&playlist=zC3nLlEvin4&controls=0&modestbranding=1&rel=0",
        muscles: ["Bíceps", "Braquiorradial", "Braquial"],
        color: "from-indigo-400 to-blue-400",
        description: "Pegada neutra, flexione os cotovelos",
        tips: [
          "Mantenha as palmas voltadas uma para outra",
          "Movimento controlado e sem balanço",
          "Trabalha mais o braquiorradial"
        ]
      },
      "agachamento": {
        video: "https://www.youtube.com/embed/ultWZbUMPL8?autoplay=1&loop=1&playlist=ultWZbUMPL8&controls=0&modestbranding=1&rel=0",
        muscles: ["Quadríceps", "Glúteos", "Isquiotibiais"],
        color: "from-yellow-500 to-orange-500",
        description: "Desça até coxas paralelas ao chão, costas retas",
        tips: [
          "Mantenha os joelhos alinhados com os pés",
          "Desça até coxas paralelas ao chão",
          "Mantenha o core contraído e peito para cima",
          "Empurre pelos calcanhares ao subir"
        ]
      },
      "leg-press": {
        video: "https://www.youtube.com/embed/IZxyjW7MPJQ?autoplay=1&loop=1&playlist=IZxyjW7MPJQ&controls=0&modestbranding=1&rel=0",
        muscles: ["Quadríceps", "Glúteos"],
        color: "from-yellow-400 to-orange-400",
        description: "Empurre a plataforma com os pés na largura dos ombros",
        tips: [
          "Pés na largura dos ombros",
          "Desça até 90 graus nos joelhos",
          "Não trave os joelhos no topo"
        ]
      },
      "extensora": {
        video: "https://www.youtube.com/embed/YyvSfVjQeL0?autoplay=1&loop=1&playlist=YyvSfVjQeL0&controls=0&modestbranding=1&rel=0",
        muscles: ["Quadríceps (isolado)"],
        color: "from-yellow-600 to-amber-600",
        description: "Estenda as pernas contra a resistência",
        tips: [
          "Ajuste o banco para apoiar bem as costas",
          "Estenda completamente as pernas",
          "Desça controladamente"
        ]
      },
      "flexora": {
        video: "https://www.youtube.com/embed/1Tq3QdYUuHs?autoplay=1&loop=1&playlist=1Tq3QdYUuHs&controls=0&modestbranding=1&rel=0",
        muscles: ["Isquiotibiais", "Panturrilhas"],
        color: "from-amber-500 to-orange-500",
        description: "Flexione as pernas trazendo os calcanhares aos glúteos",
        tips: [
          "Mantenha os quadris no banco",
          "Contraia os isquiotibiais no topo",
          "Movimento controlado"
        ]
      },
      "panturrilha": {
        video: "https://www.youtube.com/embed/JbyjNymZOt0?autoplay=1&loop=1&playlist=JbyjNymZOt0&controls=0&modestbranding=1&rel=0",
        muscles: ["Gastrocnêmio", "Sóleo"],
        color: "from-orange-500 to-red-500",
        description: "Eleve os calcanhares o máximo possível",
        tips: [
          "Suba na ponta dos pés o máximo possível",
          "Pause no topo para contração máxima",
          "Desça até sentir alongamento"
        ]
      },
      "stiff": {
        video: "https://www.youtube.com/embed/1uDiW5--rAE?autoplay=1&loop=1&playlist=1uDiW5--rAE&controls=0&modestbranding=1&rel=0",
        muscles: ["Isquiotibiais", "Glúteos", "Lombar"],
        color: "from-amber-600 to-red-600",
        description: "Desça a barra mantendo pernas semi-flexionadas",
        tips: [
          "Mantenha as costas retas durante todo movimento",
          "Leve flexão nos joelhos",
          "Sinta o alongamento nos isquiotibiais"
        ]
      },
      "desenvolvimento": {
        video: "https://www.youtube.com/embed/qEwKCR5JCog?autoplay=1&loop=1&playlist=qEwKCR5JCog&controls=0&modestbranding=1&rel=0",
        muscles: ["Deltoides", "Tríceps", "Trapézio Superior"],
        color: "from-purple-500 to-violet-500",
        description: "Empurre a barra acima da cabeça",
        tips: [
          "Mantenha o core contraído",
          "Empurre a barra em linha reta",
          "Não arqueie excessivamente as costas"
        ]
      },
      "elevacao-lateral": {
        video: "https://www.youtube.com/embed/3VcKaXpzqRo?autoplay=1&loop=1&playlist=3VcKaXpzqRo&controls=0&modestbranding=1&rel=0",
        muscles: ["Deltoides Lateral"],
        color: "from-purple-400 to-violet-400",
        description: "Eleve os halteres lateralmente até a altura dos ombros",
        tips: [
          "Leve flexão nos cotovelos",
          "Eleve até a altura dos ombros",
          "Controle a descida"
        ]
      },
      "elevacao-frontal": {
        video: "https://www.youtube.com/embed/qzSDdkTHhJg?autoplay=1&loop=1&playlist=qzSDdkTHhJg&controls=0&modestbranding=1&rel=0",
        muscles: ["Deltoides Anterior"],
        color: "from-purple-600 to-violet-600",
        description: "Eleve os halteres à frente até a altura dos ombros",
        tips: [
          "Mantenha os braços estendidos",
          "Não use impulso do corpo",
          "Eleve até a linha dos ombros"
        ]
      },
      "abdominal": {
        video: "https://www.youtube.com/embed/Xyd_fa5zoEU?autoplay=1&loop=1&playlist=Xyd_fa5zoEU&controls=0&modestbranding=1&rel=0",
        muscles: ["Reto Abdominal", "Oblíquos"],
        color: "from-pink-500 to-rose-500",
        description: "Flexione o tronco em direção aos joelhos",
        tips: [
          "Não puxe o pescoço",
          "Contraia o abdômen durante todo movimento",
          "Expire ao subir"
        ]
      },
      "prancha": {
        video: "https://www.youtube.com/embed/ASdvN_XEl_c?autoplay=1&loop=1&playlist=ASdvN_XEl_c&controls=0&modestbranding=1&rel=0",
        muscles: ["Core Completo", "Estabilizadores"],
        color: "from-pink-400 to-rose-400",
        description: "Mantenha o corpo reto em isometria",
        tips: [
          "Corpo em linha reta dos pés à cabeça",
          "Core contraído durante todo tempo",
          "Não deixe o quadril cair"
        ]
      },
      "burpees": {
        video: "https://www.youtube.com/embed/TU8QYVW0gDU?autoplay=1&loop=1&playlist=TU8QYVW0gDU&controls=0&modestbranding=1&rel=0",
        muscles: ["Corpo Todo", "Cardio"],
        color: "from-red-500 to-pink-500",
        description: "Agache, prancha, flexão, pule",
        tips: [
          "Movimento explosivo e contínuo",
          "Mantenha ritmo constante",
          "Pule com força no final"
        ]
      },
      "flexao": {
        video: "https://www.youtube.com/embed/IODxDxX7oi4?autoplay=1&loop=1&playlist=IODxDxX7oi4&controls=0&modestbranding=1&rel=0",
        muscles: ["Peitoral", "Tríceps", "Core"],
        color: "from-red-400 to-pink-400",
        description: "Desça o corpo até quase tocar o chão",
        tips: [
          "Corpo em linha reta",
          "Desça até peito quase tocar o chão",
          "Cotovelos a 45° do corpo"
        ]
      },
      "mountain-climbers": {
        video: "https://www.youtube.com/embed/nmwgirgXLYM?autoplay=1&loop=1&playlist=nmwgirgXLYM&controls=0&modestbranding=1&rel=0",
        muscles: ["Core", "Cardio", "Ombros"],
        color: "from-orange-500 to-red-500",
        description: "Alterne joelhos ao peito em ritmo acelerado",
        tips: [
          "Mantenha quadril baixo",
          "Movimento rápido e alternado",
          "Core sempre contraído"
        ]
      }
    }

    return exercises[id] || {
      video: "https://www.youtube.com/embed/IODxDxX7oi4?autoplay=1&loop=1&playlist=IODxDxX7oi4&controls=0&modestbranding=1&rel=0",
      muscles: ["Músculos Diversos"],
      color: "from-gray-500 to-gray-600",
      description: "Execute o movimento com controle",
      tips: ["Mantenha a postura correta", "Movimento controlado", "Respire adequadamente"]
    }
  }

  const data = getExerciseData(exerciseId)

  return (
    <div className="space-y-4">
      {/* Área de vídeo */}
      <div className={`relative w-full aspect-video bg-gradient-to-br ${data.color} rounded-2xl overflow-hidden shadow-2xl`}>
        {/* Vídeo do YouTube */}
        <iframe
          src={data.video}
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={exerciseName}
        />

        {/* Overlay com informações */}
        <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-xl">
          <p className="text-white font-bold text-sm">{exerciseName}</p>
        </div>

        {/* Badge PRO */}
        <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 px-3 py-1 rounded-full">
          <p className="text-white font-bold text-xs">PRO</p>
        </div>
      </div>

      {/* Informações do exercício */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Músculos trabalhados */}
        <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 p-4 rounded-xl border-2 border-red-200 dark:border-red-800">
          <h4 className="font-bold text-sm mb-3 flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
            Músculos Ativados
          </h4>
          <ul className="space-y-2">
            {data.muscles.map((muscle: string, index: number) => (
              <li key={index} className="text-sm flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full" />
                <span className="font-medium">{muscle}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Descrição da execução */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-4 rounded-xl border-2 border-blue-200 dark:border-blue-800">
          <h4 className="font-bold text-sm mb-3 flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full" />
            Como Executar
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">{data.description}</p>
        </div>
      </div>

      {/* Dicas importantes */}
      <div className="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-950/30 dark:to-amber-950/30 p-4 rounded-xl border-2 border-yellow-300 dark:border-yellow-700">
        <h4 className="font-bold text-sm mb-3 flex items-center gap-2">
          💡 Dicas Importantes
        </h4>
        <ul className="space-y-2">
          {data.tips.map((tip: string, index: number) => (
            <li key={index} className="text-sm flex items-start gap-2">
              <span className="text-yellow-600 dark:text-yellow-400 mt-0.5">•</span>
              <span className="text-muted-foreground">{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Controles adicionais */}
      <div className="flex items-center justify-center gap-4 p-4 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl">
        <button 
          onClick={() => setIsPlaying(!isPlaying)}
          className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all"
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          <span className="text-sm font-medium">{isPlaying ? "Pausar" : "Reproduzir"}</span>
        </button>
        
        <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all">
          <RotateCcw className="w-4 h-4" />
          <span className="text-sm font-medium">Reiniciar</span>
        </button>
      </div>
    </div>
  )
}

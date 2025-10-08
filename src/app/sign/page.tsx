'use client'

import { useRouter } from 'next/navigation'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { FaFacebookF } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

export default function Sign() {
  const router = useRouter()

  return (
    <div className="min-h-screen w-full bg-[#F5F7FB] flex items-start justify-center">
      {/* coluna central, sem card */}
      <div className="w-full max-w-[360px] mt-6 px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between">
          <button
            aria-label="Fechar"
            onClick={() => router.back()}
            className="p-2 -ml-2 text-[#272B33] hover:opacity-80"
          >
            <X className="h-5 w-5" />
          </button>
          <h1 className="text-base font-semibold">Entrar</h1>
          <span className="w-5" />
        </div>

        {/* Social buttons (sem sombra) */}
        <div className="mt-6 space-y-4">
          <Button
            className="w-full h-12 rounded-full justify-center gap-3
                       bg-[#244EA0] hover:bg-[#244EA0]/90 text-white shadow-none"
            onClick={() => console.log('Continuar com Facebook')}
          >
            <FaFacebookF className="h-4 w-4" />
            <span className="text-[15px]">Continuar com o Facebook</span>
          </Button>

          <Button
            className="w-full h-12 rounded-full justify-center gap-3
                       bg-[#2F6EF6] hover:bg-[#2F6EF6]/90 text-white shadow-none"
            onClick={() => console.log('Continuar com Google')}
          >
            <FcGoogle className="h-5 w-5" />
            <span className="text-[15px]">Continuar com o Google</span>
          </Button>
        </div>

        {/* Divider */}
        <div className="my-6 flex items-center justify-center">
          <span className="text-sm font-semibold text-[#16181D]">Ou</span>
        </div>

        {/* Actions (sem sombra, pílulas) */}
        <div className="space-y-3">
          <Button
            className="w-full h-12 rounded-full text-white
                       bg-[#155BFF] hover:bg-[#155BFF]/90 shadow-none"
            onClick={() => console.log('Entrar')}
          >
            Entrar
          </Button>

          <Button
            variant="outline"
            className="w-full h-12 rounded-full bg-white
                       border border-[#2F6EF6] text-[#2F6EF6]
                       hover:bg-[#EEF4FF] shadow-none"
            onClick={() => router.push('/cadastro')}
          >
            Cadastro
          </Button>
        </div>

        {/* Forgot password */}
        <div className="mt-5 text-center">
          <button
            onClick={() => router.push('/recuperar-senha')}
            className="text-xs text-[#2F6EF6] hover:underline"
          >
            Esqueceu a senha?
          </button>
        </div>
      </div>
    </div>
  )
}

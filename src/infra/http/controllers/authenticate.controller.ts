import { Body, Controller, Post, UsePipes } from '@nestjs/common'
import { ZodValidationPipe } from '@/infra/http/pipes/zod-validation-pipe'
import { PrismaService } from '@/infra/database/prisma/prisma.service'
import { z } from 'zod'
import { AuthenticateStudentUseCase } from '@/domain/forum/application/use-cases/authenticate-student'

const authenticateBodySchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

type AuthenticateBodySchema = z.infer<typeof authenticateBodySchema>

@Controller('/sessions')
export class AuthenticateController {
  constructor(
    private authenticateStudent: AuthenticateStudentUseCase,
    private prisma: PrismaService,
  ) {}

  @Post()
  @UsePipes(new ZodValidationPipe(authenticateBodySchema))
  async handle(@Body() body: AuthenticateBodySchema) {
    const { email, password } = body

    const result = await this.authenticateStudent.execute({ email, password })

    if (result.isLeft()) throw new Error()

    const { acessToken } = result.value

    return {
      acess_token: acessToken,
    }
  }
}

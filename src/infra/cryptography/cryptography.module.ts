import { Module } from '@nestjs/common'

import { Encrypter } from '@/domain/forum/application/cryptography/encrypter'
import { HashComparer } from '@/domain/forum/application/cryptography/hash-comparer'
import { HashGenerator } from '@/domain/forum/application/cryptography/hashe-generator'

import { JwtEncrypter } from './jwt-encrypter'
import { BcryptHasher } from './bcrypt'

@Module({
  providers: [
    {
      provide: Encrypter,
      useValue: JwtEncrypter,
    },
    {
      provide: HashComparer,
      useValue: BcryptHasher,
    },
    {
      provide: HashGenerator,
      useValue: BcryptHasher,
    },
  ],
  exports: [Encrypter, HashComparer, HashGenerator],
})
export class CryptographyModule {}

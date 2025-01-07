import { beforeEach, describe, expect, it } from 'vitest'

import { CreateGymUseCase } from './create-gym'

import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'

let gymsRepository: InMemoryGymsRepository
let sut: CreateGymUseCase

describe('Create Gym Use Case', () => {
  beforeEach(() => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new CreateGymUseCase(gymsRepository)
  })

  it('should be able to create gym', async () => {
    const { gym } = await sut.execute({
      title: 'Javascript Gym',
      description: null,
      phone: null,
      latitude: -29.7636124,
      longitude: -51.1388903,
    })

    expect(gym.id).toEqual(expect.any(String))
  })
})

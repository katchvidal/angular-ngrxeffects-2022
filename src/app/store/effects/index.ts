
import { UserEffects } from './user/user.effect'
import {UsersEffects}  from './users/users.effects'

export const EffectsArray : any[] = [ UsersEffects, UserEffects ]

export * from './users/users.effects'
export * from './user/user.effect'
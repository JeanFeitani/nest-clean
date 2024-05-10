import { faker } from '@faker-js/faker'

import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import {
  Notification,
  NotificationProps,
} from '@/domain/notification/enterprise/entities/notification'

export function MakeNotification(
  override?: Partial<NotificationProps> | undefined,
  id?: UniqueEntityID,
) {
  const notification = Notification.create(
    {
      recipientId: new UniqueEntityID(),
      title: faker.lorem.words(4),
      content: faker.lorem.sentence(10),
      ...override,
    },
    id,
  )

  return notification
}

import { Either, right } from '@/core/either'
import { QuestionCommentsRepository } from '../repositories/question-comments-repository'
import { Injectable } from '@nestjs/common'
import { CommentWithAuhor } from '../../enterprise/entities/value-objects/comment-with-author'

interface FetchQuestionCommentsRequest {
  page: number
  questionId: string
}

type FetchQuestionCommentsResponse = Either<
  null,
  { comments: CommentWithAuhor[] }
>

@Injectable()
export class FetchQuestionCommentsUseCase {
  constructor(private questionCommentsRepository: QuestionCommentsRepository) {}

  async execute({
    page,
    questionId,
  }: FetchQuestionCommentsRequest): Promise<FetchQuestionCommentsResponse> {
    const comments =
      await this.questionCommentsRepository.findManyByQuestionIdWithAuthor(
        questionId,
        {
          page,
        },
      )

    return right({
      comments,
    })
  }
}

import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ExperienceModel {
  @Field()
  company: string;

  @Field()
  position: string;

  @Field()
  startedAt: Date;

  @Field(() => Date, { nullable: true })
  endedAt: Date;

  @Field(() => [String])
  achievements: string[];
}

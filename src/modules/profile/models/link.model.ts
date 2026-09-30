import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LinkModel {
  @Field()
  url: string;
}

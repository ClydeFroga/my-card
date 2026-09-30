import { Field, Int, ObjectType } from '@nestjs/graphql';
import { SkillModel } from './skill.model';
import { LinkModel } from './link.model';
import { ExperienceModel } from './experience.model';
import { ProjectModel } from './project.model';

@ObjectType()
export class ProfileModel {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => [LinkModel])
  links: LinkModel[];

  @Field(() => [SkillModel])
  skills: SkillModel[];

  @Field(() => [ExperienceModel])
  experience: ExperienceModel[];

  @Field(() => [ProjectModel])
  projects: ProjectModel[];
}

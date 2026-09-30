import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { ProfileModel } from './models/profile.model';
import { ProfileService } from './profile.service';

@Resolver(() => ProfileModel)
export class ProfileResolver {
  constructor(private readonly profileService: ProfileService) {}

  @Query(() => ProfileModel, { nullable: true })
  profile() {
    return this.profileService.getProfile();
  }

  @ResolveField()
  async links(@Parent() profile: ProfileModel) {
    const { id } = profile;
    return this.profileService.getLinks(id);
  }

  @ResolveField()
  async experience(@Parent() profile: ProfileModel) {
    const { id } = profile;
    return this.profileService.getExperiences(id);
  }

  @ResolveField()
  async projects(@Parent() profile: ProfileModel) {
    const { id } = profile;
    return this.profileService.getProjects(id);
  }

  @ResolveField()
  async skills(@Parent() profile: ProfileModel) {
    const { id } = profile;
    return this.profileService.getSkills(id);
  }
}

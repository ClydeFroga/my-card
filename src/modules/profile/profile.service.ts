import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../infrastructure/prisma/prisma.service';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}

  async getProfile() {
    return await this.prisma.profile.findFirst();
  }

  getLinks(profileId: number) {
    return this.prisma.profile.findUnique({ where: { id: profileId } }).links();
  }

  getExperiences(profileId: number) {
    return this.prisma.profile
      .findUnique({ where: { id: profileId } })
      .experiences({ orderBy: { startedAt: 'desc' } });
  }

  getProjects(profileId: number) {
    return this.prisma.profile
      .findUnique({ where: { id: profileId } })
      .projects();
  }

  getSkills(profileId: number) {
    return this.prisma.profile
      .findUnique({ where: { id: profileId } })
      .skills();
  }
}

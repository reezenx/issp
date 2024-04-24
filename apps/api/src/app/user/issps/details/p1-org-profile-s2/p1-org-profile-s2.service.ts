import { Injectable } from '@nestjs/common';
import { CreateP1OrgProfileS2Dto } from './dto/create-p1-org-profile-s2.dto';
import { UpdateP1OrgProfileS2Dto } from './dto/update-p1-org-profile-s2.dto';

@Injectable()
export class P1OrgProfileS2Service {
  create(createP1OrgProfileS2Dto: CreateP1OrgProfileS2Dto) {
    return 'This action adds a new p1OrgProfileS2';
  }

  findAll() {
    return `This action returns all p1OrgProfileS2`;
  }

  findOne(id: number) {
    return `This action returns a #${id} p1OrgProfileS2`;
  }

  update(id: number, updateP1OrgProfileS2Dto: UpdateP1OrgProfileS2Dto) {
    return `This action updates a #${id} p1OrgProfileS2`;
  }

  remove(id: number) {
    return `This action removes a #${id} p1OrgProfileS2`;
  }
}

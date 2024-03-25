import { ChallengesRepository } from '../../application/repositories/ChallengesRepository';
import { Challenge } from '../../domain/entities/challenge';

export class InMemoryChallengesRepository implements ChallengesRepository {
  public items: Challenge[] = [];

  async findById(id: string): Promise<Challenge | null> {
    const challange = this.items.find((challange) => challange.id == id);
    if (!challange) {
      return null;
    }
    return challange;
  }
}

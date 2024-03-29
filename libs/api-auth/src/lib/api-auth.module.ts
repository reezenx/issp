import { DynamicModule, Module, Provider, Type } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { CaslFactory } from './casl-factory';

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'jwt' })],
  exports: [PassportModule],
})
export class ApiAuthModule {
  /**
   * @param caslFactory Class that extends CaslFactory and defines the user's abilities
   */
  static register(caslFactory: Type<CaslFactory>): DynamicModule {
    const providers: Provider[] = [
      {
        provide: CaslFactory,
        useClass: caslFactory,
      },
    ];

    return {
      module: ApiAuthModule,
      providers: providers,
      exports: providers,
    };
  }
}

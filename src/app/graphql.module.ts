import {NgModule} from '@angular/core';
import {APOLLO_OPTIONS} from 'apollo-angular';
import {ApolloClientOptions, InMemoryCache, ApolloLink} from '@apollo/client/core';
import {HttpLink} from 'apollo-angular/http';
import { setContext } from '@apollo/client/link/context';

const uri = "https://pendownonpaper.hasura.app/v1/graphql"; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {

  const basic = setContext((operation, context) => ({
    headers: {
      "content-type": "application/json",
      "x-hasura-admin-secret": "LxhyhTqUu1VMLRuIGQ1QKJV1FGNIDCmLcVDrumfPjCnVLga1sO70PUhXfuWNyKPD"
    }
  }));

  const link = ApolloLink.from([basic, httpLink.create({uri})])

  return {
    link:  link,
    cache: new InMemoryCache()
  };
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}

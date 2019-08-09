# install

npmかyarnでinstallしてください

```sh
npm install
// or
yarn install
```

# build

buildコマンドでwebpackでビルドします。

```sh
npm run build
// or
yarn run build
```

dist以下にhtml, jsファイルが生成されるのでそれを読み込めば動きます。

開発時はwebpack-dev-serverで動きます。 npmかyarnでstartコマンドを実行すればOKです

```sh
npm start
// or 
yarn start
```

# いろいろ

- reactjs + typescriptで実装してます。reactのhooksを試したかったので、部分的にhooksを適用してます。
- Postmanのmockサーバーを使って想定されているエンドポイントを叩いて描画するようになっています。
- ログイン周りは何もチェックしていないのでログインボタンをクリックすれば次のページに遷移します。APIで使うトークンだけ入れるようにして、そのトークンをAPIのヘッダに渡す想定でした。
- 主にエラーハンドリング、メッセージのページング、環境変数による値の差し替えなどできていないです。
- ヘッダーのページタイトル部分がもともとは画像だったものをテキストにしたので高さがたりなくて微妙にデザインが崩れてるところがあります。

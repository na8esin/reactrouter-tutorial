# reactrouterのチュートリアルをやっていく
https://reactrouter.com/en/main/start/tutorial#updating-data

# 初期構成
React + TypeScript + Vite

# jsdom関連
https://jestjs.io/docs/configuration#testenvironment-string
>If you are building a web app, you can use a browser-like environment through jsdom instead.

https://github.com/jestjs/jest/blob/ba74b7de1b9cca88daf33f9d1b46bfe2b7f485a5/packages/jest-message-util/src/index.ts#L115
>The error below may be caused by using the wrong test environment, see https://jestjs.io/docs/configuration#testenvironment-string.
    Consider using the "jsdom" test environment.

jestで出している気配

TypeError: Cannot destructure property 'basename' of 'React__namespace.useContext(...)' as it is null.
    https://qiita.com/miu-P/items/f25203f5eb4c2178f8cd

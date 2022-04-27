'use strict';

import Footer from '../components/Footer';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import Script from 'next/script';

export default function Zero(): JSX.Element {
    return (
        <>
            <Head>
                <title>0. コンパイル - C++講習会2022</title>
            </Head>
            <div className="container">
                <Navigation />
                <main className="contents">
                    <h1>C++講習会2022</h1>
                    <h2>コンパイル</h2>
                    <section>
                        <h3>目標</h3>
                        <p>コンパイルを行う。講習会の雰囲気に慣れる。</p>
                    </section>
                    <section>
                        <h3>先輩からのお願い</h3>
                        <p>1章からは各自で勉強して頂くことになりますが、お願いがあります。</p>
                        <ul>
                            <li>分からなかったらすぐ先輩に聞く。(優しく教えます。)</li>
                            <li>2日から3日で一つの章を終わらせるペースでやる。(進む分にはOK)</li>
                            <li>部室には週2・3日は来てほしい。(部活内交流や進捗確認のため)</li>
                            <li>毎週金曜日17時からのミーティングには必ず来てほしい。</li>
                        </ul>
                    </section>
                    <section>
                        <h3>語句説明</h3>
                        <section>
                            <h4>プログラム</h4>
                            <p>コンピューターが解釈・動作できるデータ。</p>
                        </section>
                        <section>
                            <h4>プログラミング言語</h4>
                            <p>コンピュータに解釈できるようにつくられた人工言語。コンピューターへ指令を出すため使われる。</p>
                        </section>
                        <section>
                            <h4>プログラミング</h4>
                            <p>プログラミング言語を使用して、プログラムを作成すること。</p>
                        </section>
                        <section>
                            <h4>C++</h4>
                            <p>&quot;しーぷらすぷらす&quot;(読み方)というプログラミング言語。もっぱら&quot;しーぷら&quot;、&quot;しーぷらぷら&quot;、&quot;ぷらぷら&quot;と呼ばれる。今から講習会で習っていく言語。</p>
                        </section>
                    </section>
                    <section>
                        <h3>サンプル</h3>
                        <code><Script src="https://gist.github.com/HinoAyase/71cf86e2034ece6a9431be608521e8cd.js"></Script></code>
                        <section>
                            <h4>コードについて</h4>
                            <p>まずはコードの中身の解説に入る前に一部の記号がどんな役割を持つか説明します。</p>
                            <section>
                                <h5>コメント</h5>
<pre><code>
// スラッシュ二つでこれ以降の文字全部
/*
* ←スラッシュとアスタリスクで括ると、括った部分全てをコメントアウトし、プログラムの動作には影響しなくなります。
*/
</code></pre>
                                <p>
                                    なので、
                                    <code><Script src="https://gist.github.com/HinoAyase/cca751bd8e3fd2ae6ba196ea2fb909footer-contents.js"></Script></code>
                                    とかやってもサンプルコードとやっていることは同じです。
                                </p>
                            </section>
                            <section>
                                <h5>セミコロン</h5>
                                <p>;←これのこと。文の終わりに<strong>必ず付けないといけません。</strong></p>
                            </section>
                            <section>
                                <h5>インデント</h5>
                                <p>&lbrace;&rbrace;内に入っているコードを1段ずらし、コードを見やすくすること。やり方は下に書いてます。</p>
                            </section>
                            <section>
                                <h5>全角文字</h5>
                                <p>日本語や全角スペースのこと。コード内にコメント以外で入れてしまうとコードとして認識しなくなってしまうので気を付けよう。</p>
                                <p>ただしC++11からは変数名・クラス名・関数名などに意図的に使用することが可能となった。</p>
                            </section>
                            <section>
                                <h5>実行される順番</h5>
                                <p><strong>コードは上から下に向かって順番に実行されます。</strong>これは基本的にどんなコードでも同じです。</p>
                            </section>
                            <section>
                                <h5>ショートカットキー</h5>
                                <p>色々なショートカットキーがありますが特に便利なものを紹介します。</p>
                            </section>
                            <section>
                                <h5>Ctrl+Z</h5>
                                <p>操作を間違えた場合などに使います。例えば、ゴミ箱に削除したファイルを元に戻したい場合などに役立ちます。</p>
                                <p>いわゆるUndo(アンドゥ)ってやつです。</p>
                            </section>
                            <section>
                                <h5>Ctrl+X</h5>
                                <p>選択した項目を切り取ります。</p>
                                <p>いわゆるCut(カット・切り取り)、Delete(デリート・削除)ってやつです。</p>
                            </section>
                            <section>
                                <h5>Ctrl+C</h5>
                                <p>選択した項目をコピーします。</p>
                                <p>いわゆるCopy(コピー)、Yank(ヤンク)ってやつです。</p>
                            </section>
                            <section>
                                <h5>Ctrl+V</h5>
                                <p>コピーした項目を貼り付けます。</p>
                                <p>いわゆるPaste(ペースト・貼り付け)、Put(プット・出力)ってやつです。</p>
                            </section>
                            <section>
                                <h5>Ctrl+Y</h5>
                                <p>[Ctrl]+[Z]キーで元に戻した操作は、[Ctrl]+[Y]キーを押してやり直すことができます。例えば、操作を間違えたと思って元に戻したけれど、やっぱり操作後の状態でよかったという場面で利用します。</p>
                                <p>いわゆるRedo(リドゥ)ってやつです。</p>
                            </section>
                            <section>
                                <h5>Ctrl+A</h5>
                                <p>すべて選択します。</p>
                                <p>いわゆるSelect All(セレクトオール・全選択)ってやつです。</p>
                            </section>
                            <section>
                                <h5>Ctrl+K → Ctrl+D</h5>
                                <p>選択された行のインデントが揃います。</p>
                                <p>いわゆる名称はないものの、Visual Studioの便利な機能。</p>
                            </section>
                        </section>
                        <section>
                            <h4>解説</h4>
<pre><code>
int main(void) &lbrace;
    ここに書いたことがプログラムとして実行されます。
    return 0; // ←これはプログラムの終わりを表します。
&rbrace;
</code></pre>
                        </section>
                    </section>
                    <section>
                        <h3>課題</h3>
                        <ul>
                            <li>Visual Studio(以下VS)を立ち上げて、サンプルコードを実行する。</li>
                        </ul>
                    </section>
                </main>
            </div>
            <Footer />
        </>
    );
}

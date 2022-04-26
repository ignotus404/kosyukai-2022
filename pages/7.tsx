'use strict';

import Footer from '../components/Footer';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import Script from 'next/script';

export default function Seven(): JSX.Element {
    return (
        <>
            <Head>
                <title>7. 配列 - C++講習会2022</title>
            </Head>
            <div className="container">
                <nav className="nav">
                    <div className="nav-container">
                        <Navigation />
                    </div>
                </nav>
                <main className="contents">
                    <h1>C++講習会2022</h1>
                    <h2>配列</h2>
                    <section>
                        <h3>目標</h3>
                        <p>配列を用いて一度に複数の変数を確保することができる。</p>
                    </section>
                    <section>
                        <h3>語句説明</h3>
                        <section>
                            <h4>配列</h4>
                            <p>棚のようなもの。棚の中1つ1つに変数が入っている。イメージ画像は4段ある棚。</p>
                        </section>
                        <section>
                            <h4>要素</h4>
                            <p>棚の中の変数1つ1つ。イメージ画像の中の引き出し1段1段。</p>
                            <p>&lt;イメージ&gt;</p>
                            <picture>
                                <source srcSet="image/array_base.webp" type="image/webp" />
                                <img src="image/array_base.png" width="574" alt="" />
                            </picture>
                        </section>
                    </section>
                    <section>
                        <h3>サンプル</h3>
                        <code><Script src="https://gist.github.com/HinoAyase/04fafedc77d5418449182ffooter-contents9348fbed.js"></Script></code>
                        <section>
                            <h4>解説</h4>
                            <section>
                                <h5>#include&lt;array&gt;</h5>
                                <span><pre><code>std::array</code></pre>を使えるようにするための文。</span>
                            </section>
                            <section>
                                <h5>配列の宣言、要素</h5>
                                <span>
                                    配列を使うと一度に複数の変数を確保できます。
                                    宣言は<pre><code>std::array &lt;型, 要素数&gt; 配列名;</code></pre>の形で行います。
                                </span>
                                <span>
                                    要素は<strong>0から順番に数えられ、要素数-1個までの番号</strong>があります。配列は要素の中に変数が入っていて、各要素ごとに中身を変えられます。
                                    各要素には<pre><code>配列[番号]</code></pre>でアクセスできます。
                                </span>
                            </section>
                            <section>
                                <h5>配列の初期化</h5>
                                <p>
                                    a・b・cでは3通りの初期化方法を紹介しています。
                                    aは宣言と同時に代入していて、&lbrace;&rbrace;内で0から順番にコンマ区切りで値を代入できます。
                                </p>
                                <span>
                                    例：
                                    <pre><code>std::array &lt;int, 3&gt; n = &lbrace; 3, 8 &rbrace;</code></pre>
                                    この方法だと、<pre><code>n[0] == 3</code></pre>、<pre><code>n[1] == 8</code></pre>となります。
                                    また、<pre><code>n[2]</code></pre>にはこの方法のときは自動的に0が入るのでエラーが出にくくなります。
                                </span>
                                <p>
                                    bはfor文を回して、iを使ってすべての要素にアクセスしています。
                                    cは後述する範囲for文を使ってすべての要素にアクセスしています。
                                </p>
                            </section>
                            <section>
                                <h5>範囲for文(foreach文)</h5>
                                <p>使い方</p>
                                <pre><code>for(配列と同じ型 &amp;ループ内で使う変数名 : 配列名) &lbrace;&rbrace;</code></pre>
                                <p>
                                    ループ内で使う変数名というのは、配列の中身を一旦その変数に移して実行するためです。配列の中身を書き換える場合はその変数の前に&amp;を付けましょう。
                                </p>
                                <p>
                                    範囲for文は配列の数だけループさせる文です。for文と違い、配列の要素数が変わってもコードを書き換える必要がない便利な文です。
                                    また、同様の文の他のプログラミング言語での名称からforeach文、拡張for文と呼ばれることもあります。
                                </p>
                            </section>
                        </section>
                    </section>
                    <section>
                        <h3>課題</h3>
                        <ul>
                            <li>サンプルコードを実行して出力を確かめる。</li>
                            <li><strong>要提出</strong> <a href="https://gist.github.com/HinoAyase/d57e18ede1cb89d4ab51b10dc458c6cf">1から100までのフィボナッチ数列を出力するプログラムを作る。(クリックで説明を表示)</a></li>
                        </ul>
                    </section>
                </main>
            </div>
            <footer className="footer">
                <div className="footer-contents">
                    <Footer />
                </div>
            </footer>
        </>
    );
}

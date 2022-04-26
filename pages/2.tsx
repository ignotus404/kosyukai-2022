'use strict';

import Footer from '../components/Footer';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import Script from 'next/script';

export default function Two(): JSX.Element {
    return (
        <>
            <Head>
                <title>2. 表示 - C++講習会2022</title>
            </Head>
            <div className="container">
                <nav className="nav">
                    <div className="nav-container">
                        <Navigation />
                    </div>
                </nav>
                <main className="contents">
                    <h1>C++講習会2022</h1>
                    <h2>表示</h2>
                    <section>
                        <h3>目標</h3>
                        <p>変数を使ってコンソール画面に文字、数字を出力出来るようになる。</p>
                    </section>
                    <section>
                        <h3>語句説明</h3>
                        <section>
                            <h4>変数</h4>
                            <p>箱のようなもの。</p>
                        </section>
                        <section>
                            <h4>型</h4>
                            <p>変数の形。形によって入れられるものが違う。</p>
                        </section>
                        <section>
                            <h4>変数名</h4>
                            <p>変数を区別するための名前。</p>
                        </section>
                        <section>
                            <h4>宣言</h4>
                            <p>「この名前を使います。」と知らせること。</p>
                        </section>
                    </section>
                    <section>
                        <h3>サンプル</h3>
                        <code><Script src="https://gist.github.com/HinoAyase/062bbd7b32ccd2b14284a63198d4f7b6.js"></Script></code>
                        <section>
                            <h4>解説</h4>
                            <section>
                                <h5>#include &lt;string&gt;</h5>
                                <p>string型を使えるようにするための文。</p>
                            </section>
                            <section>
                                <h5>型の種類</h5>
                                <p>主に使用することが多い型を書きます。</p>
                                <ul>
                                    <li>int 整数を入れられる</li>
                                    <li>float 小数を入れられる</li>
                                    <li>double 小数を入れられる(↑より扱える範囲が広い)</li>
                                    <li>char 文字を入れられる</li>
                                    <li>string 文字列を入れられる</li>
                                </ul>
                            </section>
                            <section>
                                <h5>const</h5>
                                <span>
                                    宣言時に文頭に書くことにより、変数の中身の変更が出来なくなるようになる。例えば、
<pre><code>
const int one_week = 7;
one_week = 100;
</code></pre>
                                    とすることはできない。変わることのない数を扱うときに誤って変更しないようにするのが主な用途。
                                </span>
                            </section>
                            <section>
                                <h5>変数の宣言と初期化</h5>
<pre><code>
// 宣言・初期化
// 型 変数名 = 値;
int a = 10;
double answer = 3.5;
// 宣言
// 型 変数名;
char dec;
</code></pre>
                                <p>上に書いてあるような形で変数の宣言を行います。</p>
                                <p>
                                    宣言と同時に代入することを初期化といいます。エラーが出るのを防止するために、初めのうちは<strong>必ず初期化をしてください。</strong>
                                    宣言のみの場合だと中身には何も入っていません。(0すら入っていません。)
                                </p>
                            </section>
                            <section>
                                <h5>bool型</h5>
                                <p>trueとfalseの2種類しか代入できない型です。後でやる条件文においてはtrueは真、falseは偽を表します。if文でよく使います。</p>
                            </section>
                            <section>
                                <h5>変数名の基本的な付け方</h5>
                                <span>
                                    <strong>半角英数字(大文字も可)と一部の記号でつけなければなりません。</strong>
                                    例：
<pre><code>
int eger; // OK
char acter; // OK
int [); // NG
short ぐらんで; // NG(ただしC++11からはOK)
</code></pre>
                                </span>
                                <span>
                                    また、<strong>数字を先頭に付けてはいけません。</strong>
                                    例：
<pre><code>
int eractive; // OK
long huge; // OK
short 1tsu; // NG
</code></pre>
                                </span>
                                <span>
                                    多くの場合、変数名は小文字から始まり、2番目以降の単語の頭文字を大文字にするcamelCase記法が推奨されています。
                                    例：
<pre><code>
int thisIsVariable; // OK
char youAreAnIdiot; // OK
string YukaNiTBS; // NG(C++的には全然問題ないけど慣習には従った方がリーダビリティ向上になる)
</code></pre>
                                </span>
                                <span>
                                    上の3つさえ守れば基本的にどんな変数名でも大丈夫ですが、分かりやすい変数名を付けることが大事です。
                                    例：数を表す変数名
<pre><code>
int number; // OK(ただし何の数字であるかが分かりやすい状態でなければNG)
int num; // OK(同上)
int n; // OK(ただしnumberの略であることが分かりやすい状態でなければNG)
int kazu; // NG(プログラミングにおいては英語が推奨される)
</code></pre>
                                </span>
                            </section>
                        </section>
                    </section>
                    <section>
                        <h3>課題</h3>
                        <ul>
                            <li>サンプルコードを実行して出力を確かめる。</li>
                            <li><strong>要提出</strong> 変数に入れてから&quot;Hello World!&quot;を出力する。</li>
                            <li>いろいろ変数に入れてみる。</li>
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

const guidebookConfig = {
    defaultCategory: 'welcome.aboutUs', // Default open category
    //defaultFont: 'Roboto', // Default font
    defaultFont: 'MS Gothic',

    texts: {
        sidebarHeader: 'Biflost Server Guide',
        searchPlaceholder: '検索...',
        uiSettings: 'UI設定',
        uiSettingsDescription: 'UIのカスタマイズ',
        changeTextSize: 'テキストサイズ変更:',
        searchBar: '検索バーの表示:',
        selectFont: 'フォントを選択:',
        availableFonts: [
            'MS Gothic', 'serif', 'sans-serif', 'monospace', 'Meiryo', 'MS Mincho'
        ]
    },

    categories: {
        welcome: { // always unique
            title: '🐇Bifrost Server へようこそ！',
            icon: 'fas fa-home',
            subcategories: {
                aboutUs: { // always unique
                    title: 'はじめに',
                    icon: 'fas fa-info-circle',
                    content: `
                        <h3>はじめに…</h3>
                        <p>現在当サーバーはまだまだ調整が必要な要素が多くあります。</p>
                        <p>順次対応を行っている状態のため、</p>
                        <p>開発段階のサーバーだとご理解いただいたうえでプレイしていただくようお願いいたします。</p>

                        <h3>前提知識として…</h3>
                        <p>■サーバールールは街に参加する際に全員に守っていただきます。</p>
                        <p>■違反した場合はサーバーへの接続制限などのペナルティが課せられる場合があります。</p>
                        <p>■法律は守るか違反するかをロールプレイとして判断できます。</p>
                        <p>■違反した場合はゲーム内での罰金や拘留などの刑罰があります。</p>
                        <p>■サーバールール、法律の両方に抵触する場合、サーバールールが優先されます。</p>

                        <h3>サーバールールリンク</h3>
                        <p>詳細は以下のリンクよりご確認ください。</p>
                        <p><a href="javascript:openExternalLink('https://docs.google.com/document/d/1Ux-A22GJlJqeON3HZaccKxjMhxG1PsgHJgS94LFdDqk/edit?usp=sharing')">🌐サーバールール</a></p>
                    `
                },
                rules: { // always unique
                    title: 'サーバールール',
                    icon: 'fas fa-gavel',
                    content: `
                        <h3>録画環境について…</h3>
                        <p>録画できるよう環境を整えてください。不具合等の対応や補填の為にクリップ等の提出が求められる場合があります。</p>
                        <p>ShadowPlayやOBSのリプレイバッファなどがおススメです。</p>

                        <h3>マナーについて…</h3>
                        <p>■言動に気をつけ、相手を不快にさせないよう配慮してください。</p>
                        <p>■RP上、多少の強い言葉遣いは仕方ないですが、節度を守ってください。</p>
                        <p>■キャラクター名や見た目は公序良俗に反しないものを設定してください。</p>

                        <h3>ロールプレイについて…</h3>
                        <p>■ロールプレイサーバーのため、通常のGTAと異なることをご理解ください。</p>
                        <p>■仕事や犯罪等でのプレイヤー間でのやり取りを楽しむためのロールプレイです。過度なロールプレイの強要はしないでください。</p>
                        <p>■ゲーム内の情報は基本的にDiscordではなくゲーム内で情報収集をしてください。</p>
                        <p>■ゲームのキャラクターとして割り切った振る舞いはせず、一人の人間としてRPをしてください。</p>
                        <p style="color: red">例：銃を向けられたら怖がる、事故を起こしたら示談する、など</p>

                        <h3>セーフゾーンについて…</h3>
                        <p>セーフゾーン一覧</p>
                        <p style="color: red"><strong>病院周辺、市役所敷地内、警察署敷地内、メカニックガレージ敷地内、ディーラー敷地内、飲食店敷地内</strong></p>
                        <p>■セーフゾーンでの戦闘や犯罪は禁止です。但し、出勤中の職員が迷惑行為等を対応するために武力を行使する場合があります。</p>
                        <p>■セーフゾーン外からセーフゾーン内に対しての攻撃は禁止です。</p>

                        <h3>Discordルール…</h3>
                        <p>■運営に直接DMを飛ばさないでください。</p>
                        <p>■質問する前に、まずはDiscordの右上の検索窓を使って検索をしてください。</p>
                        <p>■ゲーム内の内容は極力ゲーム内で解決してください。</p>

                        <h3>禁止事項…</h3>
                        <p>■キャラクターは原則ひとり1キャラです。</p>
                        <p>■コンバットログは禁止です。</p>
                        <p>※犯罪中や職務質問等をされた際にログアウトして逃げること</p>
                        <p>■シーン中にクラッシュした場合は⁠クラッシュ報告チャンネルで報告をお願いします。</p>
                        <p>■犯罪等のルール に記載されているシーンを除いて、他人を殺害したり車両で敷いたりすることは禁止です。</p>
                        <p>■警察の職務質問や事件対応を除いて、プレイヤーのアイテムや車両の窃盗は禁止です。</p>
                        <p>■警察や救急になりすます行為は禁止です。</p>
                        <p>■警察や救急などの緊急車両を盗むのは禁止です。</p>
                        <p>■プレイヤー間の取引で詐欺行為を行わないでください。</p>
                        <p>■体の一部が透明になるスキンを使用するのは禁止です。</p>
                        <p>■強盗や犯罪対応以外で、同意のないエスコートは禁止です。</p>
                        <p>■ゴースティング行為は禁止です。</p>
                        <p>※画面共有やライブ配信などを用いてゲームを有利に進める行為</p>
                        <p>■ゲーム内チャットはやむを得ない時以外使用禁止です。</p>
                        <p>■ゲーム内のバグやグリッチを故意に使うことは禁止です。</p>
                        <p>※悪用していない場合でも故意に仕様していれば処罰対象</p>
                        <p>■RP的に不適切と思われる行動はしないでください。</p>
                        <p>■外部ツールの利用やクライアントの改変、またこれに準ずる方法によってゲームプレイを優位に進める行為は禁止です。</p>
                        <p>※画面共有やライブ配信などを用いてゲームを有利に進める行為</p>
                        <p>■当サーバーと関係ない宣伝や引き抜きは禁止です。</p>
                        <p>■プレイスタイルを強要するなどのサーバーの発展を阻害する行為は禁止です。</p>
                        <p>■サーバールール違反を企図する言動が見受けられた場合にもペナルティを課す場合があります。</p>
                        <p>■法律やルールの穴をついた行動や、グレーゾーンを探る行為は行わないでください。</p>
                        <p>■その他運営が不適切と判断した行動はペナルティの対象となる場合があります。</p>

                        <h3>不具合関連…</h3>
                        <p>■クールタイムが存在する場合、リログなどでクールダウンを消す行為は禁止です。</p>
                        <p>■松葉杖がついている間は /reloadskin コマンドの使用しないでください。(松葉杖が呪物化します)</p>

                        <h3>サーバー運営について…</h3>
                        <p>■ゲーム内で不公平に思うルールや仕様があっても、その場は警察の指示に従ってください。</p>
                        <p>その後、一呼吸おいても呑み込めない場合は⁠要望・提案 にて、その理由や改善案を添えてお問い合わせください。</p>
                        <p>■運営に対しゲーム内でバランス調整等の要望はしないでください。</p>
                        <p>■警察署や病院等へ街の運営に関する相談に行かないでください。</p>

                        <h3>その他…</h3>
                        <p>■請求書は<strong>3日以内</strong>に支払ってください。</p>
                        <p>■請求書の支払いは銀行口座より行われます。予め銀行にお金を預けておいてください。</p>
                        <p>■犯罪を行う場合は /name コマンドを利用して初心者マークを外してください。</p>
                        <p>■可能な限り /name コマンドを使用し名前を表示してください。</p>
                        <p>■指名手配されたから /name コマンドでネームプレートを消すなどの行為は禁止です。</p>
                        <p>■配信中は /name コマンドから衛星マークを付けることを推奨しています。</p>
                    `
                },
                laws: { // always unique
                    title: '法律・罰金一覧',
                    icon: 'fas fa-balance-scale',
                    content: `
                        <h3>公務執行妨害</h3>
                        <ul>
                            <li>抵触:警察の職務質問を拒否する等、公務員の仕事を妨害した場合</li>
                            <li>罰金:50万</li>
                            <li>指名手配:無し</li>
                        </ul>

                        <h3>暴行罪</h3>
                        <ul>
                            <li>抵触:双方の合意無しに戦闘行為を行った場合</li>
                            <li>罰金:50万</li>
                            <li>指名手配:無し</li>
                        </ul>

                        <h3>脅迫罪</h3>
                        <ul>
                            <li>抵触:他人を銃などで脅した場合</li>
                            <li>罰金:50万</li>
                            <li>指名手配:無し</li>
                        </ul>

                        <h3>道路交通法違反</h3>
                        <ul>
                            <li>抵触:逆走などの危険な運転を行った場合</li>
                            <li>罰金:30万</li>
                            <li>指名手配:無し</li>
                        </ul>

                        <h3>銃刀法違反</h3>
                        <ul>
                            <li>抵触:武器ライセンス無しで銃火器を持っていた場合(弾薬は除く)、正当な理由なく発砲を行った場合</li>
                            <li>罰金:100万</li>
                            <li>指名手配:無し</li>
                        </ul>

                        <h3>殺人未遂罪</h3>
                        <ul>
                            <li>抵触:銃の発砲等を行い、他人に危険な思いをさせた場合</li>
                            <li>罰金:100万</li>
                            <li>指名手配:有り(1時間)</li>
                        </ul>

                        <h3>NPC殺人罪</h3>
                        <ul>
                            <li>抵触:NPCを殺害した場合</li>
                            <li>罰金:50万</li>
                            <li>指名手配:無し</li>
                        </ul>

                        <h3>プレイヤー殺人罪</h3>
                        <ul>
                            <li>抵触:他人を殺害した場合</li>
                            <li>罰金:300万</li>
                            <li>指名手配:有り(6時間)</li>
                            <li>拘留:50分</li>
                        </ul>

                        <h3>窃盗罪</h3>
                        <ul>
                            <li>抵触:カージャックなど、違法な手段で車両や金品を入手する行為</li>
                            <li>罰金:50万</li>
                            <li>指名手配:無し</li>
                        </ul>

                        <h3>軽強盗罪</h3>
                        <ul>
                            <li>抵触:ATM強盗 、コンビニ強盗 、家強盗のいづれかの強盗を行った場合</li>
                            <li>罰金:100万</li>
                            <li>指名手配:有り(1時間)</li>
                            <li>拘留:30分</li>
                        </ul>

                        <h3>強盗罪</h3>
                        <ul>
                            <li>抵触:フリーカ銀行強盗、宝石店強盗、現金輸送車強盗、密輸飛行機墜落強盗のいづれかの強盗を行った場合</li>
                            <li>罰金:150万</li>
                            <li>指名手配:有り(3時間)</li>
                            <li>拘留:40分</li>
                        </ul>

                        <h3>準重強盗罪</h3>
                        <ul>
                            <li>抵触:豪華客船強盗、パレト銀行強盗のいづれかの強盗を行った場合</li>
                            <li>罰金:300万</li>
                            <li>指名手配:有り(12時間)</li>
                            <li>拘留:50分</li>
                        </ul>

                        <h3>重強盗罪</h3>
                        <ul>
                            <li>抵触:パシフィック銀行強盗、ユニオン保管庫強盗、アーティファクト強盗、飛行場襲撃強盗のいづれかの強盗を行った場合</li>
                            <li>罰金:400万</li>
                            <li>指名手配:有り(24時間)</li>
                            <li>拘留:60分</li>
                        </ul>

                        <h3>薬物所持罪</h3>
                        <ul>
                            <li>抵触:薬物やその関連アイテムを所持していた場合</li>
                            <li>罰金:50万</li>
                            <li>追加額:薬物1個につき1万(上限100個まで)</li>
                            <li>指名手配:無し</li>
                        </ul>

                        <h3>詐欺罪</h3>
                        <ul>
                            <li>抵触:職務質問などで虚偽の申告をした場合</li>
                            <li>罰金:50万</li>
                            <li>指名手配:無し</li>
                        </ul>

                        <h3>監禁罪</h3>
                        <ul>
                            <li>抵触:人質を取るなどをした場合</li>
                            <li>罰金:50万</li>
                            <li>指名手配:無し</li>
                        </ul>

                        <h3>無差別殺人罪</h3>
                        <ul>
                            <li>抵触:無差別殺人などサーバールールに違反した場合、またそれらを企図した場合</li>
                            <li>罰金:100億</li>
                            <li>指名手配:永久</li>
                            <li>拘留:100万時間</li>
                        </ul>
                    `
                },
            }
        },

        tutorials: { // always unique
            title: 'チュートリアル',
            icon: 'fas fa-book',
            subcategories: {
                inGameSetings: { // always unique
                    title: 'ゲーム内設定',
                    icon: 'fa fa-gamepad',
                    content: `
                        <h3>ボイスチャット設定</h3>
                        <p>■ゲーム内のOptionからボイスチャットメニューを開いて有効にしてください。</p>
                        <p>■音量は適宜調整してください。</p>
                        <p>■オプションのキー割り当てのFiveMの中に「Cycle Proximity」という項目があり、これが声の範囲を調整するボタンになります。</p>
                        <p>※「N」キーが個人的にはおススメです。</p>

                        <h3>グラフィック設定</h3>
                        <p>■ゲーム内オプションのグラフィックスの中に「Extended Texture Budget」という項目があります。</p>
                        <p> 街の情報が読み込まれない場合は、ここの値を増やしてください。</p>

                        <h3>ミニマップを出す等の設定</h3>
                        <p>■ゲーム内でI(アイ)キーを押してOptionsから設定してください。</p>
                    `
                },
                getJob: { // always unique
                    title: '仕事の就き方',
                    icon: 'fas fa-truck',
                    content: `
                        <h3>市役所職(市民職)</h3>
                        <p>7248番地にある市役所にて、市民職に就職することができます。</p>
                        <p>正面から入った階段横に心無きのおじさんが居ますので、Eキーで話しかけて就職してください。</p>
                        <p>市民職に関しての詳細は、チュートリアルをご確認ください。</p>
                        <p><a href="javascript:openExternalLink('https://docs.google.com/document/d/1LYL_9FOfuwrpqNp1Lv5rZl30FKSz6kESO5jgO8AbGFs/edit?usp=sharing')">🌐チュートリアル</a></p>

                        <h3>公務員・準公務員職</h3>
                        <p>警察、救急隊、メカニックが該当します。</p>
                        <p>こちらは市役所で就くことが出来ない職業なので、募集等があった際には各求人案内よりご応募ください。</p>

                        <h3>職業ではない仕事・稼ぎ方について</h3>
                        <p>上記リンクのチュートリアルに情報がございますので、ご確認ください。</p>
                    `
                },

                commands:{
                    title: 'コマンド・キーバインド一覧',
                    icon: 'fas fa-keyboard',
                    content:`
                        <h3>インベントリ関連</h3>
                        <p>TABキー:インベントリを開く</p>
                        <p>F2キー:トランクやごみ箱等を開く</p>

                        <h3>操作関連</h3>
                        <p>F7キー:請求書を開く</p>
                        <p>Nキー:ボイスチャットの範囲を変更(既定の設定)</p>
                        <p>Mキー:スマホを開く</p>
                        <p>F1キー:ラジアルメニューを開く</p>
                        <p>Fキー:車両に乗る</p>
                        <p>Lキー:車両に鍵をかける</p>
                        <p>Bキー:シートベルトやハーネスを締める</p>
                        <p>Xキー:手をあげる</p>
                        <p>Jキー:ジョブの切り替え</p>
                        <p>Homeキー:実行できる犯罪やサーバー内人数の確認</p>
                        <p>F4キー:エモート画面を開く</p>
                        <p>ALTキー:心の目で見る</p>
                        <p>Iキー:HUDの設定画面を開く</p>
                        <p>Qキー:物陰に隠れる</p>
                        <p>Vキー:視点を切り替える</p>
                        <p>1～5の数字のキー:ホットバーのアイテムを使用する</p>
                        <p>Hキー:ハイビーム等のヘッドライトの切り替え(車両乗車時)</p>
                        <p>Tキー:チャット欄を開く</p>

                        <h3>チャット欄からのコマンド</h3>
                        <p>/invoice:請求書を開く</p>
                        <p>/help:NPC医者を呼ぶ</p>
                        <p>/cash:所持している現金を確認する</p>
                        <p>/bank:銀行の残高を確認する</p>
                        <p>/reloadskin:スキンの再読み込みを行う</p>
                        <p>/311 [message]:救急隊にメッセージを送る</p>
                        <p>/911p [message]:警察にメッセージを送る</p>
                        <p>/checkdamage:車両のダメージを確認</p>
                        <p>/checkveh:車両のカスタマイズを確認</p>
                        <p>/givekey:近くの人に車両の鍵を貸す</p>
                        <p>/me [message]:吹き出しで周囲の人にメッセージを送る</p>
                        <p>/dice [1-6]:指定した個数のダイスを振る</p>
                    `
                },
            }
        },

        usingCosts:{
            title: '施設利用料金表',
            icon: 'fas fa-building',
            subcategories:{
                police:{
                    title: '警察 武器ライセンス発行・車両インパウンド料金表',
                    icon: 'fa fa-shield',
                    content: `
                        <h3>武器ライセンス発行費用</h3>
                        <p>発行手数料:100万</p>

                        <p>武器ライセンス発行条件</p>
                        <ul>
                            <li>条件1:街に来てから3日以上経過している場合</li>
                            <li>条件2:犯罪で逮捕時に武器ライセンスを剥奪されてから2週間以上経過している場合</li>
                        </ul>

                        <h3>武器ライセンス注意点</h3>
                        <p>その場で発行するのではなく、権利が付与されます。</p>
                        <p>権利が付与されたら、市役所で武器ライセンスを発行し自分のインベントリーに所持しておいてください。</p>
                        <p>武器ライセンスを所持していない場合、権利を付与されていても武器を押収される場合があります。</p>
                        <p>指名手配のある犯罪を行った場合、武器ライセンスは剥奪となります。</p>

                        <h3>車両インパウンド費用</h3>

                        <p>路上等に放置された車両(車・船)</p>
                        <ul>
                            <li>手数料:無償</li>
                            <li>押収時間:無し</li>
                        </ul>

                        <p>墜落や路上等で放置された航空機</p>
                        <ul>
                            <li>手数料:50万</li>
                            <li>押収時間:無し</li>
                            <li>※仕事で使用する車両は無償</li>
                        </ul>

                        <p>爆発や水没等で使用不可になった車両</p>
                        <ul>
                            <li>手数料:無償</li>
                            <li>押収時間:無し</li>
                        </ul>

                        <p>犯罪に使用された車両(車・船)</p>
                        <ul>
                            <li>手数料:50万</li>
                            <li>押収時間:2時間</li>
                        </ul>

                        <p>犯罪に使用された車両(航空機)</p>
                        <ul>
                            <li>手数料:200万</li>
                            <li>押収時間:12時間</li>
                            <li>(↓2024/07/31までの特例措置↓)</li>
                            <li>手数料:100万</li>
                            <li>押収時間:3時間</li>
                        </ul>
                    `
                },
                ambulance: {
                    title: '病院医療費料金表',
                    icon: 'fas fa-heartbeat',
                    content: `
                        <h3>蘇生費用</h3>
                        <p>院内蘇生:25万</p>
                        <p>現場蘇生:50万</p>

                        <h3>怪我の治療費用</h3>
                        <p>院内治療:10万</p>
                        <p>現場治療:20万</p>
                    `
                },

                mechanic: {
                    title: 'メカニック料金表',
                    icon: 'fas fa-wrench',
                    content: `
                        <h3>修理費用</h3>
                        <p>一か所につき一律10万(タイヤは1本10万、4本の場合は40万)</p>
                        <p>※出張修理の場合は、修理する箇所につき上記の金額+10万</p>
                        <p>レッカー費用:30万</p>
                        <p>※レッカー車で車等を引き上げた後、その場で修理(出張修理)かメカニックガレージで修理(通常の修理)が選べます。</p>

                        <h3>外装カスタム</h3>
                        <p>一か所につき10万(色変更は一部位につき各10万、ヘッドライト、アンダーネオンカラーの色変更含む)</p>
                        <p>※一部を除くホイールにはバージョンが設定されており、カスタムの際にお伺いいたしますので、予めご了承ください。</p>

                        <h3>性能系パーツ</h3>
                        <p>※ヘリや航空機のカスタムは、アーマーと色変更、スモークガラスの色変更のみ対応可能です。</p>

                        <p>エンジン</p>
                        <ul>
                            <li>Tier1:100万</li>
                            <li>Tier2:200万</li>
                            <li>Tier3:500万</li>
                            <li>Tier4:600万</li>
                            <li>Tier5:1000万</li>
                        </ul>

                        <p>ブレーキ</p>
                        <ul>
                            <li>Tier1:200万</li>
                            <li>Tier2:300万</li>
                            <li>Tier3:500万</li>
                        </ul>

                        <p>トランスミッション</p>
                        <ul>
                            <li>Tier1:100万</li>
                            <li>Tier2:200万</li>
                            <li>Tier3:500万</li>
                            <li>Tier4:800万</li>
                        </ul>

                        <p>サスペンション</p>
                        <ul>
                            <li>Tier1:100万</li>
                            <li>Tier2:200万</li>
                            <li>Tier3:500万</li>
                            <li>Tier4:600万</li>
                            <li>Tier5:1000万</li>
                        </ul>

                        <p>ターボチャージャー:200万</p>
                        <p>ニトロ補充(ターボ必須):30万(※初回セットアップ時のみ50万)</p>

                        <h3>オプションパーツ</h3>
                        <p>アーマー:200万(ヘリ装着の場合のみ1000万)</p>
                        <p>ハーネス:300万</p>
                        <p>アンチラグシステム(ターボ必須):100万</p>
                        <p>ドリフトタイヤ:100万</p>
                        <p>NOSインジェクター(冷却水のカラー変更):10万</p>
                        <p>マニュアルトランスミッション:100万</p>

                        <p>オイルポンプ</p>
                        <ul>
                            <li>Tier1:100万</li>
                            <li>Tier2:200万</li>
                            <li>Tier3:300万</li>
                        </ul>

                        <p>ドライブシャフト</p>
                        <ul>
                            <li>Tier1:100万</li>
                            <li>Tier2:200万</li>
                            <li>Tier3:300万</li>
                        </ul>

                        <p>シリンダーヘッド</p>
                        <ul>
                            <li>Tier1:100万</li>
                            <li>Tier2:200万</li>
                            <li>Tier3:300万</li>
                        </ul>

                        <p>バッテリーケーブル</p>
                        <ul>
                            <li>Tier1:100万</li>
                            <li>Tier2:200万</li>
                            <li>Tier3:300万</li>
                        </ul>

                        <p>フューエルタンク</p>
                        <ul>
                            <li>Tier1:200万</li>
                            <li>Tier2:400万</li>
                            <li>Tier3:600万</li>
                        </ul>
                    `
                },
            }
        },

        vip: { // always unique
            title: 'サーバー支援',
            icon: 'fas fa-crown',
            subcategories: {
                howToBuy: { // always unique
                    title: 'サーバー支援について',
                    icon: 'fas fa-thumbs-up',
                    content: `
                        <h3>Biflost Serverへのご支援について</h3>
                        <p>サーバー支援について、PixivのFANBOX(月額)にてご支援いただけるようになっております。</p>
                        <p>特典は4プランご用意しておりますが、無理のない範囲でご支援いただければ幸いです。</p>
                        <p>Discordのサーバー支援チャンネルからPixivFANBOXにてプランをご選択ください。</p>
                        <p>プランに応じて以下の権利を取得することができます。上位のプランに関しては、そのプラン以下の権利もセットになります。</p>
                        <ul>
                            <li>プラン1(500円):スキン変更権、プラン車両A購入権</li>
                            <li>プラン2(1500円):プラン車両B購入権、ハウジングSサイズ購入権、航空機A購入権</li>
                            <li>プラン3(3000円):プラン車両C購入権、ハウジングMサイズ購入権</li>
                            <li>プラン4(5000円):プラン車両D購入権、ハウジングLサイズ購入権、航空機B購入権</li>
                        </ul>

                        <img src="https://media.discordapp.net/attachments/1255330931053691003/1255332987629736057/image.png?ex=6680b3f3&is=667f6273&hm=4a85984500ea1e9eb16b003b9a2af85ff43a0174b557253f00a702bb8a34d464&=&format=webp&quality=lossless&width=750&height=479" alt="" style="width:75%; height:auto;"/>

                        <p>プラン加入後に、プラン加入状況のご確認の為、[サーバー支援された方へのご連絡]から、アンケートフォームよりご回答ください。</p>
                    `
                },
                vipNotice: { // always unique
                    title: 'プラン特典の注意点',
                    icon: 'fas fa-info-circle',
                    content: `
                        <h3>プラン特典の注意点</h3>
                        <p style="color: red"><strong>特典にて取得したものを、他人に譲渡する行為は一切禁止といたします。</strong></p>

                        <p>サーバー支援の特典車両の購入権やハウジングの購入権についてご利用を希望される際は、</p>
                        <p>・特典車両や航空機については > > > 航空機ディーラー</p>
                        <p>・ハウジングについては > > > 不動産屋</p>
                        <p>にそれぞれご連絡ください。</p>
                        <p>該当の職員が不在の場合は【市役所職員】までご連絡ください。</p>

                        <p>支援終了後は特典の利用、変更、その他追加等の対応はできかねます。あらかじめご了承ください。</p>
                        <p>※支援終了後もご購入いただいた車両・航空機・家等はご利用いただけます。</p>

                        <h3>プラン車両・航空機について</h3>
                        <p>プラン特典の車両については、販売台数の制限は行いません。</p>
                        <p>プラン特典の航空機（ヘリ）については、1ヶ月に1台までとします。</p>
                        <p>※但し、プラン4に加入している場合、プラン特典の航空機（飛行機）を航空機（ヘリ）に利用し、ヘリを2台購入することは可能です。</p>
                        <p>プラン車両の詳しい内容については下記の価格表をご覧ください。</p>
                        <p><a href="javascript:openExternalLink('https://docs.google.com/spreadsheets/d/1kxMHe5rp90v2MlZ08_PywSrRY0CbJKj0EUiKOvxEgsQ/edit?usp=sharing')">🌐プラン車両・航空機の価格表</a></p>

                        <h3>ハウジングについて</h3>
                        <p><strong>ハウジングに関してのみ、最終ログインから1か月以上経過した場合は撤去する場合がございます。</strong></p>
                        <p>家の所持は加入しているプランによらず<strong>1人につき1軒</strong>までとします(鍵の共有は可能)</p>
                        <p>サイズ問わず、ドアがある場所に設置が可能です。(一部のドアには設置できない場合があります)</p>
                        <p>外観と内装が合わないと運営が判断した場合、設置をお断りする場合がございます。</p>
                        <p>プラン2でSサイズ、プラン3でMサイズ、プラン4でLサイズが購入可能となります。</p>
                        <p>一度購入した家を売却・返金することは出来ません。</p>
                        <p>一部、家が設置できない場所がございます。ご了承ください。</p>
                        <p>家の買い替えを行いたい場合は、古い家の購入金額から半額分をキャッシュバックし割引することができます。</p>
                        <p>現在、ガレージの追加は不可となります。(歪んでいるため)</p>
                        <p>各家の購入金額は下記のカタログをご覧ください。</p>
                        <p><a href="javascript:openExternalLink('https://docs.google.com/spreadsheets/d/1w_vvddoJhBLrlFCVtIRgZlSbQNSAQPSL1t0Rd2-__48/edit?gid=2140827291#gid=2140827291')">🌐不動産カタログ</a></p>
                    `
                },
            }
        },
    }
};
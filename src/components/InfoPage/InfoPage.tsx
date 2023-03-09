import cn from 'classnames';
import styles from './styles.module.scss';

export function InfoPage() {
    return (
        <section className={styles.InfoPage}>
            <div className={cn(styles.aboutMt, styles.section)}>
                <h2 className={styles.mainHeading}>About RStype</h2>
                <p>
                    RStype was created as the final project in Rolling Scopes
                    School. The task was to create a copy of any existence site,
                    app, game or anything else. So, we choose to create a clone
                    of
                    <a
                        className={styles.monkeytypeLink}
                        rel="noreferrer"
                        href="https://monkeytype.com/"
                        target="_blank"
                    >
                        monkeytype
                    </a>
                    .
                </p>
                <p>
                    <a
                        className={styles.monkeytypeLink}
                        rel="noreferrer"
                        href="https://github.com/monkeytypegame/monkeytype"
                        target="_blank"
                    >
                        monkeytype
                    </a>{' '}
                    - is a open source minimalistic and customizable typing
                    test. It is written by using only Typescript. So we decided
                    to make it with React. By the way, not all, but many
                    functions from original have been implemented
                </p>
                <p className={styles.feelFree}>Feel free to test yourself!</p>
            </div>
            <div className={cn(styles.whatImpl, styles.section)}>
                <h2 className={styles.mainHeading}>What is implemented:</h2>
                <ul className={styles.implCont}>
                    <li>
                        <h3 className={styles.subHeading}>Frontend:</h3>
                        <ul>
                            <li>
                                <h4 className={styles.subAltHeading}>
                                    Settings:
                                </h4>
                                <ul>
                                    <li>Test difficulty</li>
                                    <li>Quick restart bind</li>
                                    <li>Test language</li>
                                    <li>Sound volume options</li>
                                    <li>Sound on click</li>
                                    <li>Sound on error</li>
                                    <li>Make caret static or dynamic</li>
                                    <li>Style of timer</li>
                                    <li>Color of timer</li>
                                    <li>Opacity of timer</li>
                                    <li>Font size</li>
                                    <li>Font family</li>
                                    <li>Flip test colors</li>
                                    <li>Colorful mode</li>
                                    <li>Different themes</li>
                                    <li>
                                        Possibility to import/export
                                        settings(with it validation)
                                    </li>
                                    <li>Open/close animation</li>
                                </ul>
                            </li>
                            <li>
                                <h4 className={styles.subAltHeading}>
                                    Leaderboard:
                                </h4>
                                <ul>
                                    <li>
                                        Sort users by their best game by wpm
                                    </li>
                                    <li>
                                        Highlighting the name of the best user
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <h4 className={styles.subAltHeading}>Test:</h4>
                                <ul>
                                    <li>Two game mods, 4 sub-mods for each</li>
                                    <li>Realtime word-check</li>
                                    <li>
                                        Realtime marking of correct/incorrect
                                        letters/words
                                    </li>
                                    <li>Realtime statistics calculation</li>
                                    <li>Possibility of sound playback</li>
                                    <li>
                                        Chart creation in the end of the test
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <h4 className={styles.subAltHeading}>
                                    User account:
                                </h4>
                                <ul>
                                    <li>Best games in each category</li>
                                    <li>
                                        Chart of the ratio of speed to distance
                                    </li>
                                    <li>User minimal statistics</li>
                                    <li>User all statistics</li>
                                    <li>Game list with game statistics</li>
                                </ul>
                            </li>
                            <li>
                                <h4 className={styles.subAltHeading}>
                                    Authentication
                                </h4>
                                <ul>
                                    <li>Registration(with validation)</li>
                                    <li>Login(with validation)</li>
                                    <li>AuthToken saving</li>
                                    <li>
                                        Re-login when reload/reopen tab/browser
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h3 className={styles.subHeading}>Backend</h3>
                        <ul>
                            <li>User registration</li>
                            <li>User login</li>
                            <li>User authToken generation</li>
                            <li>Setting user games and their statistics</li>
                            <li>Getting user games and their statistics</li>
                            <li>Setting user settings</li>
                            <li>Getting user settings</li>
                            <li>Getting rating</li>
                            <li>Getting user profile</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </section>
    );
}

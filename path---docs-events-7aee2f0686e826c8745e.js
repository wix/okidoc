webpackJsonp([0x7b7b9189fcda],{360:function(n,e){n.exports={data:{page:{frontmatter:{title:"Player events",include:[{childMarkdownRemark:{headings:[{value:"Video Events",depth:3}],html:'<h3 id="video-events"><a href="#video-events" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Video Events</h3>\n<p><code>VIDEO_EVENTS.ERROR</code> - Error occured. You can check all errors <a href="#errors">below</a>.</p>\n<p><code>VIDEO_EVENTS.STATE_CHANGED</code> - Playback state changed. You can check all states <a href="#playback-states">below</a>.</p>\n<p><code>VIDEO_EVENTS.CHUNK_LOADED</code> - Chunk of video loaded.</p>\n<p><code>VIDEO_EVENTS.CURRENT_TIME_UPDATED</code> - Updated current time of playback.</p>\n<p><code>VIDEO_EVENTS.DURATION_UPDATED</code> - Duration of video updated.</p>\n<p><code>VIDEO_EVENTS.VOLUME_STATUS_CHANGED</code> - Volume status changed.</p>\n<p><code>VIDEO_EVENTS.UPLOAD_STALLED</code> - Upload stalled for some reason.</p>\n<p><code>VIDEO_EVENTS.UPLOAD_SUSPEND</code> - Upload suspended for some reason.</p>\n<p><code>VIDEO_EVENTS.PLAY_REQUEST_TRIGGERED</code> - Player was requested for play.</p>'}},{childMarkdownRemark:{headings:[{value:"UI Events",depth:3}],html:'<h3 id="ui-events"><a href="#ui-events" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>UI Events</h3>\n<p><code>UI_EVENTS.PLAY_TRIGGERED</code> - User triggered play via play control.</p>\n<p><code>UI_EVENTS.PLAY_OVERLAY_TRIGGERED</code> - User triggered play via overlay.</p>\n<p><code>UI_EVENTS.PAUSE_TRIGGERED</code> - User triggered pause.</p>\n<p><code>UI_EVENTS.PROGRESS_CHANGE_TRIGGERED</code> - User changed current time of playback.</p>\n<p><code>UI_EVENTS.VOLUME_CHANGE_TRIGGERED</code> - User changed volume.</p>\n<p><code>UI_EVENTS.MUTE_STATUS_TRIGGERED</code> - User changed mute status.</p>\n<p><code>UI_EVENTS.FULLSCREEN_STATUS_CHANGED</code> - User changed fullscreen state.</p>\n<p><code>UI_EVENTS.MOUSE_ENTER_ON_PLAYER_TRIGGERED</code> - Mouse entered player boundaries.</p>\n<p><code>UI_EVENTS.MOUSE_MOVE_ON_PLAYER_TRIGGERED</code> - Mouse moved in player boundaries.</p>\n<p><code>UI_EVENTS.MOUSE_LEAVE_ON_PLAYER_TRIGGERED</code> - Mouse left player boundaries.</p>\n<p><code>UI_EVENTS.CONTROL_BLOCK_HIDE_TRIGGERED</code> - Controls disappeared.</p>\n<p><code>UI_EVENTS.CONTROL_BLOCK_SHOW_TRIGGERED</code> - Controls appeared.</p>\n<p><code>UI_EVENTS.PROGRESS_MANIPULATION_STARTED</code> - User\'s manipulation with progress bar started.</p>\n<p><code>UI_EVENTS.PROGRESS_MANIPULATION_ENDED</code> - User\'s manipulation with progress bar finished.</p>\n<p><code>UI_EVENTS.KEYBOARD_KEYDOWN_INTERCEPTED</code> - User pressed keyboard button on player.</p>\n<p><code>UI_EVENTS.LOADER_SHOW_TRIGGERED</code> - Loader appeared.</p>\n<p><code>UI_EVENTS.LOADER_HIDE_TRIGGERED</code> - Loader disappeared.</p>\n<p><code>UI_EVENTS.LOADING_COVER_SHOW_TRIGGERED</code> - Loading cover appeared.</p>\n<p><code>UI_EVENTS.LOADING_COVER_HIDE_TRIGGERED</code> - Loading cover disappeared.</p>\n<p><code>UI_EVENTS.TOGGLE_PLAYBACK_WITH_KEYBOARD_TRIGGERED</code> - Playback toggled via keyboard.</p>\n<p><code>UI_EVENTS.GO_BACKWARD_WITH_KEYBOARD_TRIGGERED</code> - Go backward in playback triggered via keyboard.</p>\n<p><code>UI_EVENTS.GO_FORWARD_WITH_KEYBOARD_TRIGGERED</code> - Go forward in playback triggered via keyboard.</p>\n<p><code>UI_EVENTS.INCREASE_VOLUME_WITH_KEYBOARD_TRIGGERED</code> - Volume increased via keyboard.</p>\n<p><code>UI_EVENTS.DECREASE_VOLUME_WITH_KEYBOARD_TRIGGERED</code> - Volume decreased via keyboard.</p>\n<p><code>UI_EVENTS.MUTE_SOUND_WITH_KEYBOARD_TRIGGERED</code> - Sound muted via keyboard.</p>\n<p><code>UI_EVENTS.UNMUTE_SOUND_WITH_KEYBOARD_TRIGGERED</code> - Soune unmuted via keyobard.</p>\n<p><code>UI_EVENTS.HIDE_MANIPULATION_INDICATOR_TRIGGERED</code> - Manipulation indicator disappeared.</p>\n<p><code>UI_EVENTS.PLAYER_WIDTH_CHANGE_TRIGGERED</code> - Player width changed.</p>\n<p><code>UI_EVENTS.PLAYER_HEIGHT_CHANGE_TRIGGERED</code> - Player height changed.</p>\n<p><code>UI_EVENTS.PLAY_WITH_SCREEN_CLICK_TRIGGERED</code> - User triggered play via click on screen.</p>\n<p><code>UI_EVENTS.PAUSE_WITH_SCREEN_CLICK_TRIGGERED</code> - Uset triggered pause via click on screen.</p>\n<p><code>UI_EVENTS.CONTROL_DRAG_START</code> - User started drag control.</p>\n<p><code>UI_EVENTS.CONTROL_DRAG_END</code> - Uset ended drag control.</p>\n<p><code>UI_EVENTS.MAIN_BLOCK_HIDE_TRIGGERED</code> - Main UI block disappeared.</p>\n<p><code>UI_EVENTS.MAIN_BLOCK_SHOW_TRIGGERED</code> - Main UI block appeared.</p>'}},{childMarkdownRemark:{headings:[{value:"Errors",depth:3}],html:'<h3 id="errors"><a href="#errors" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Errors</h3>\n<p><code>ERRORS.MANIFEST_LOAD</code> - Cannot load manifest.</p>\n<p><code>ERRORS.MANIFEST_PARSE</code> - Cannot parse manifest.</p>\n<p><code>ERRORS.MANIFEST_INCOMPATIBLE</code> - Current system is not fit requirements of manifest.</p>\n<p><code>ERRORS.LEVEL_LOAD</code> - Cannot load level of video.</p>\n<p><code>ERRORS.CONTENT_LOAD</code> - Cannot load content of video.</p>\n<p><code>ERRORS.MEDIA</code> - Problem with playing video.</p>\n<p><code>ERRORS.UNKNOWN</code> - Unknown error.</p>'}},{childMarkdownRemark:{headings:[{value:"Playback States",depth:3}],html:'<h3 id="playback-states"><a href="#playback-states" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Playback States</h3>\n<p><code>STATES.SRC_SET</code> - Source of video setted in player.</p>\n<p><code>STATES.LOAD_STARTED</code> - Player started loading of video data.</p>\n<p><code>STATES.METADATA_LOADED</code> - Player loaded video metadata.</p>\n<p><code>STATES.READY_TO_PLAY</code> - Player ready to play something.</p>\n<p><code>STATES.SEEK_IN_PROGRESS</code> - Seek in progress.</p>\n<p><code>STATES.PLAY_REQUESTED</code> - Player was requested for play.</p>\n<p><code>STATES.WAITING</code> - Player is waiting for content to download.</p>\n<p><code>STATES.PLAYING</code> - Player is playing video.</p>\n<p><code>STATES.PAUSED</code> - Player paused video.</p>\n<p><code>STATES.ENDED</code> - Video ended.</p>'}}]},headings:[{depth:1,value:"Player events"}],html:'<h1 id="player-events"><a href="#player-events" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Player events</h1>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment">// Use it from VideoPlayer object</span>\n<span class="token keyword">import</span> VideoPlayer <span class="token keyword">from</span> <span class="token string">\'video-player\'</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>VideoPlayer<span class="token punctuation">.</span>VIDEO_EVENTS<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Use destruction</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> VIDEO_EVENTS <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'video-player\'</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>VIDEO_EVENTS<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<blockquote>\n<p>Add new event listeners</p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>player<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span>VideoPlayer<span class="token punctuation">.</span>UI_EVENTS<span class="token punctuation">.</span>PLAY_TRIGGERED<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token comment">// Will be executed after you will click on play button</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// To supply a context value for `this` when the callback is invoked,</span>\n<span class="token comment">// pass the optional context argument</span>\nplayer<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span>VideoPlayer<span class="token punctuation">.</span>VIDEO_EVENTS<span class="token punctuation">.</span>UPLOAD_STALLED<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>handleStalledUpload<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<blockquote>\n<p>And remove them</p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">callback</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// Code to handle some kind of event</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">// ... Now callback will be called when some one will pause the video ...</span>\nplayer<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span>VideoPlayer<span class="token punctuation">.</span>UI_EVENTS<span class="token punctuation">.</span>PAUSE_TRIGGERED<span class="token punctuation">,</span> callback<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// ... callback will no longer be called.</span>\nplayer<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span>VideoPlayer<span class="token punctuation">.</span>UI_EVENTS<span class="token punctuation">.</span>PAUSE_TRIGGERED<span class="token punctuation">,</span> callback<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// ... remove all handlers for event UI_EVENTS.PAUSE_TRIGGERED.</span>\nplayer<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span>VideoPlayer<span class="token punctuation">.</span>UI_EVENTS<span class="token punctuation">.</span>PAUSE_TRIGGERED<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>You can create listeners for events triggered by the video player, using <a href="/docs/api#on">on</a> method. To remove a listener, use <a href="/docs/api#off">off</a>.</p>\n<p>Below you can see the events that can be passed as eventName.</p>'}},pathContext:{slug:"docs/events/"}}}});
//# sourceMappingURL=path---docs-events-7aee2f0686e826c8745e.js.map
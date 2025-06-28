<template>
  <div id="page-container">
    <div id="et-boc" class="et-boc">
      <header class="et-l et-l--header">
        <div class="et_builder_inner_content et_pb_gutters3">
          <div
            style="
              display: flex;
              align-items: center;
              gap: 1rem;
              margin-bottom: 1rem;
            "
          >
            <img
              src="/images/everhost.png"
              alt="Everhost Logo"
              style="height: 48px; width: auto"
            />
            <a
              class="et_pb_button et_pb_button_two et_pb_bg_layout_light dsm-none"
              href="https://manage.everhost.io/"
              data-dsm-lightbox-id="dsm_button_two_lightbox dsm_button_0_tb_header"
              style="float: right; margin-left: auto; margin-top: 1%"
              >Login</a
            >
          </div>
        </div>
      </header>
      <div id="et-main-area">
        <div id="main-content">
          <article
            id="post-14"
            class="post-14 page type-page status-publish hentry"
          >
            <div class="entry-content">
              <div class="et-l et-l--post">
                <div class="et_builder_inner_content et_pb_gutters3">
                  <div class="et_pb_section et_pb_section_0 et_section_regular">
                    <div class="et_pb_row et_pb_row_0 et_pb_gutters1">
                      <div
                        class="et_pb_column et_pb_column_1_2 et_pb_column_0 et_pb_css_mix_blend_mode_passthrough"
                      >
                        <div
                          class="et_pb_module et_pb_text et_pb_text_0 et_pb_text_align_left et_pb_text_align_center-phone et_pb_bg_layout_light"
                        >
                          <div class="et_pb_text_inner">
                            <p>
                              10-15% More Bookings With
                              <span
                                style="
                                  background: -webkit-linear-gradient(
                                    Benefit 180deg,
                                    #6c4ad3 0%,
                                    #893393 100%
                                  );
                                  -webkit-background-clip: text;
                                  -webkit-text-fill-color: transparent;
                                "
                                >Everhost</span
                              >
                            </p>
                          </div>
                        </div>
                        <div
                          class="et_pb_module et_pb_text et_pb_text_1 et_pb_text_align_left et_pb_text_align_center-phone et_pb_bg_layout_light"
                        >
                          <div class="et_pb_text_inner">
                            <p style="font-weight: 400">
                              Immediately offer guests a 5-star experience by
                              providing everything needed before arrival and
                              during their stay.  Learn how Everhost can help
                              grow your business.
                            </p>
                          </div>
                        </div>
                        <div
                          class="et_pb_module dsm_button dsm_button_0 et_pb_bg_layout_light"
                        >
                          <div class="et_pb_module_inner">
                            <div
                              class="et_pb_button_module_wrappers dsm_button_1_wrapper et_pb_button_alignment_left et_pb_button_alignment_tablet_left et_pb_button_alignment_phone_center et_pb_module"
                            >
                              <a
                                class="et_pb_button et_pb_button_one et_pb_bg_layout_light dsm-none"
                                href="https://everhost.io/6142439"
                                target="_blank"
                                data-dsm-lightbox-id="dsm_button_one_lightbox dsm_button_0"
                                >View Demo</a
                              ><a
                                class="et_pb_button et_pb_button_two et_pb_custom_button_icon et_pb_bg_layout_light dsm-none"
                                Benefit
                                href="#heroVid"
                                data-icon="&#xf144;"
                                data-dsm-lightbox-id="dsm_button_two_lightbox dsm_button_0"
                                @click.prevent="isModalOpen = true"
                                >Watch video</a
                              >
                            </div>
                          </div>
                        </div>
                        <Carousel />
                      </div>
                      <div
                        class="et_pb_column et_pb_column_1_2 et_pb_column_1 et_pb_css_mix_blend_mode_passthrough et-last-child"
                      >
                        <div
                          class="et_pb_module et_pb_image et_pb_image_0 et_animated et-waypoint"
                        >
                          <span class="et_pb_image_wrap"
                            ><img
                              fetchpriority="high"
                              decoding="async"
                              width="690"
                              height="800"
                              src="/images/Welcome-To-Play-del-Carmen.png"
                              alt="everhost"
                              title="Welcome To Play del Carmen"
                              sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 690px, 100vw"
                              class="wp-image-1409"
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <modal v-model="isModalOpen">
                    <div
                      id="heroVid"
                      class="et_pb_section et_pb_section_1 popup et_pb_with_background et_section_regular"
                    >
                      <div class="et_pb_row et_pb_row_1">
                        <div
                          class="et_pb_column et_pb_column_4_4 et_pb_column_2 et_pb_css_mix_blend_mode_passthrough et-last-child"
                        >
                          <div
                            class="et_pb_module et_pb_text et_pb_text_2 et_animated et_pb_text_align_center et_pb_bg_layout_light"
                          >
                            <div class="et_pb_text_inner">
                              <p>
                                With Everhost you can create a welcome book in
                                less than 10 MINUTES!
                              </p>
                            </div>
                          </div>
                          <div class="et_pb_module et_pb_video et_pb_video_0">
                            <div class="et_pb_video_box">
                              <iframe
                                width="100%"
                                height="400"
                                src="https://www.youtube.com/embed/1Iwa79l3mZI"
                                title="Everhost Demo"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen
                              ></iframe>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </modal>
                  <div
                    class="et_pb_section et_pb_section_2 et_pb_with_background et_section_regular"
                  >
                    <div class="et_pb_row et_pb_row_2">
                      <div
                        class="et_pb_column et_pb_column_1_3 et_pb_column_3 et_pb_css_mix_blend_mode_passthrough et_pb_with_background"
                      >
                        <div
                          class="et_pb_module et_pb_blurb et_pb_blurb_0 et_animated et_pb_text_align_left et_pb_blurb_position_top et_pb_bg_layout_light et_pb_with_background"
                        >
                          <div class="et_pb_blurb_content">
                            <div class="et_pb_main_blurb_image">
                              <span
                                class="et_pb_image_wrap et_pb_only_image_mode_wrap"
                                ><img
                                  decoding="async"
                                  width="87"
                                  height="88"
                                  src="/images/send.png"
                                  alt="guide everhost"
                                  class="et-waypoint et_pb_animation_top et_pb_animation_top_tablet et_pb_animation_top_phone wp-image-35"
                                  data-lazy-src="/images/send.png777.png"
                                />
                              </span>
                            </div>
                            <div class="et_pb_blurb_container">
                              <h4 class="et_pb_module_header">
                                <span>Empower Guests</span>
                              </h4>
                              <div class="et_pb_blurb_description">
                                <p style="font-weight: 400; color: white">
                                  House rules, how-to videos, customizable area
                                  guide to help your guests plan their trip and
                                  enjoy their stay.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="et_pb_column et_pb_column_1_3 et_pb_column_4 et_pb_css_mix_blend_mode_passthrough"
                      >
                        <div
                          class="et_pb_module et_pb_blurb et_pb_blurb_1 et_animated et_pb_text_align_left et_pb_blurb_position_top et_pb_bg_layout_light et_pb_with_background"
                        >
                          <div class="et_pb_blurb_content">
                            <div class="et_pb_main_blurb_image">
                              <span
                                class="et_pb_image_wrap et_pb_only_image_mode_wrap"
                                ><img
                                  decoding="async"
                                  width="80"
                                  height="80"
                                  src="/images/ellipsis.png"
                                  alt="guide everhost"
                                  class="et-waypoint et_pb_animation_top et_pb_animation_top_tablet et_pb_animation_top_phone wp-image-37"
                                  data-lazy-src="/images/ellipsis.png"
                              /></span>
                            </div>
                            <div class="et_pb_blurb_container">
                              <h4 class="et_pb_module_header">
                                <span>Save Time</span>
                              </h4>
                              <div class="et_pb_blurb_description">
                                <p>
                                  <span style="color: white"
                                    >Reduce or eliminate the back and forth
                                    communication with guests. Provide answers
                                    all in one place.</span
                                  >
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="et_pb_column et_pb_column_1_3 et_pb_column_5 et_pb_css_mix_blend_mode_passthrough et-last-child"
                      >
                        <div
                          class="et_pb_module et_pb_blurb et_pb_blurb_2 et_animated et_pb_text_align_left et_pb_blurb_position_top et_pb_bg_layout_light et_pb_with_background"
                        >
                          <div class="et_pb_blurb_content">
                            <div class="et_pb_main_blurb_image">
                              <span
                                class="et_pb_image_wrap et_pb_only_image_mode_wrap"
                                ><img
                                  decoding="async"
                                  width="80"
                                  height="80"
                                  src="/images/star.png"
                                  alt="reviews everhost"
                                  data-lazy-sizes="(max-width: 160px) 100vw, 160px"
                                  class="et-waypoint et_pb_animation_top et_pb_animation_top_tablet et_pb_animation_top_phone wp-image-546"
                                  data-lazy-src="/images/star.png"
                              /></span>
                            </div>
                            <div class="et_pb_blurb_container">
                              <h4 class="et_pb_module_header">
                                <span>More 5-Stars</span>
                              </h4>
                              <div class="et_pb_blurb_description">
                                <p style="font-weight: 400; color: white">
                                  Today&#8217;s guests seek that
                                  &#8220;wow&#8221; experience.  Immediately
                                  impress your guests and help them stay like a
                                  local.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="et_pb_section et_pb_section_3 et_section_regular">
                    <div class="et_pb_row et_pb_row_3 et_animated">
                      <div
                        class="et_pb_column et_pb_column_4_4 et_pb_column_6 et_pb_css_mix_blend_mode_passthrough et-last-child"
                      >
                        <div
                          class="et_pb_module et_pb_text et_pb_text_3 et_pb_text_align_center et_pb_bg_layout_light"
                        >
                          <div class="et_pb_text_inner eh-text-bold">
                            <p>5-Star Stays,<br />Start With Everhost!</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Benefit :benefits="communicationBenefits" />
                  </div>
                  <div class="et_pb_section et_pb_section_4 et_section_regular">
                    <Benefit :benefits="localBenefits" />
                  </div>
                  <div class="et_pb_section et_pb_section_3 et_section_regular">
                    <div class="et_pb_row et_pb_row_4">
                      <div
                        class="et_pb_column et_pb_column_1_2 et_pb_column_7 et_pb_css_mix_blend_mode_passthrough"
                      >
                        <div
                          class="et_pb_module et_pb_text et_pb_text_4 et_pb_text_align_left et_pb_text_align_center-phone et_pb_bg_layout_light"
                        >
                          <div class="et_pb_text_inner">
                            <p>Your guests, your data</p>
                          </div>
                        </div>
                        <div
                          class="et_pb_module dsm_icon_list dsm_icon_list_0 multimediaSecIcon"
                        >
                          <div class="et_pb_module_inner">
                            <ul
                              class="dsm_icon_list_items dsm_icon_list_ltr_direction dsm_icon_list_layout_vertical"
                            >
                              <li
                                class="dsm_icon_list_child dsm_icon_list_child_0"
                              >
                                <span class="dsm_icon_list_wrapper"
                                  ><span class="dsm_icon_list_icon">
                                    <list-checkmark /> </span></span
                                ><span class="dsm_icon_list_text"
                                  >Auto collect and securely store guest
                                  info.</span
                                >
                              </li>
                              <li
                                class="dsm_icon_list_child dsm_icon_list_child_1"
                              >
                                <span class="dsm_icon_list_wrapper"
                                  ><span class="dsm_icon_list_icon">
                                    <list-checkmark /> </span></span
                                ><span class="dsm_icon_list_text"
                                  >Turn on / off guest info. form</span
                                >
                              </li>
                              <li
                                class="dsm_icon_list_child dsm_icon_list_child_2"
                              >
                                <span class="dsm_icon_list_wrapper">
                                  <list-checkmark />
                                </span>
                                <span class="dsm_icon_list_text"
                                  >Download and use in your favorite email or
                                  text / sms marketing platform</span
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div
                          class="et_pb_module dsm_button dsm_button_1 et_pb_bg_layout_light"
                        >
                          <div class="et_pb_module_inner">
                            <div
                              class="et_pb_button_module_wrappers dsm_button_2_wrapper et_pb_button_alignment_left et_pb_button_alignment_tablet_left et_pb_button_alignment_phone_center et_pb_module"
                            >
                              <a
                                class="et_pb_button et_pb_button_one et_pb_custom_button_icon et_pb_bg_layout_light dsm-none"
                                href="https://manage.everhost.io/signup"
                                target="_blank"
                                data-icon="&#x35;"
                                data-dsm-lightbox-id="dsm_button_one_lightbox dsm_button_1"
                                >Get Started</a
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="et_pb_column et_pb_column_1_2 et_pb_column_8 et_pb_css_mix_blend_mode_passthrough et-last-child"
                      >
                        <div
                          class="et_pb_module et_pb_image et_pb_image_1 et_animated et-waypoint"
                        >
                          <span class="et_pb_image_wrap"
                            ><img
                              decoding="async"
                              width="690"
                              height="800"
                              src="/images/Airbnb-Welcome-Book.png"
                              alt="mobile everhost"
                              title="Guest Welcome Book"
                              data-lazy-sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 690px, 100vw"
                              class="wp-image-1405"
                              data-lazy-src="/images/Guest-Welcome-Book.png"
                          /></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="themes">
                    <div class="eh-text-bold eh-text-center">
                      16+ themes available
                    </div>
                    <Carousel :slides="themes" />
                  </div>
                  <div class="et_pb_section et_pb_section_6 et_section_regular">
                    <div class="et_pb_row et_pb_row_11 et_animated">
                      <div
                        class="et_pb_column et_pb_column_4_4 et_pb_column_17 et_pb_css_mix_blend_mode_passthrough et-last-child"
                      >
                        <div
                          class="et_pb_module et_pb_text et_pb_text_10 et_pb_text_align_center et_pb_bg_layout_light"
                        >
                          <div
                            class="et_pb_text_inner eh-text-bold eh-text-center"
                          >
                            <p>Works Everywhere</p>
                          </div>
                        </div>
                        <div
                          class="et_pb_module et_pb_text et_pb_text_11 et_pb_text_align_center et_pb_bg_layout_light"
                        >
                          <div class="et_pb_text_inner">
                            <p style="font-weight: 400">
                              No app to download<br />Simply add a link to your
                              guest messages and communication
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="et_pb_row et_pb_row_12">
                      <div class="platforms-grid">
                        <div
                          v-for="(platform, index) in platforms"
                          :key="index"
                          class="platform-item"
                        >
                          <img
                            decoding="async"
                            width="113"
                            height="113"
                            :src="platform.img"
                            :alt="platform.title"
                            :title="platform.title"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="et_pb_section et_pb_section_7 et_pb_with_background et_section_regular"
                  >
                    <div class="et_pb_row et_pb_row_14">
                      <div
                        class="et_pb_column et_pb_column_4_4 et_pb_column_30 et_pb_css_mix_blend_mode_passthrough et-last-child"
                      >
                        <div
                          class="et_pb_module et_pb_text et_pb_text_12 et_animated et_pb_text_align_center et_pb_bg_layout_light"
                        >
                          <div class="et_pb_text_inner">
                            <p class="eh-text-bolder"> Super Host Features</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="et_pb_row et_pb_row_15 et_pb_gutters2">
                      <div
                        class="et_pb_column et_pb_column_1_3 et_pb_column_31 et_pb_css_mix_blend_mode_passthrough"
                      >
                        <div
                          class="et_pb_module et_pb_blurb et_pb_blurb_3 et_animated et_pb_text_align_left et_pb_blurb_position_top et_pb_bg_layout_light et_pb_with_background"
                        >
                          <div class="et_pb_blurb_content">
                            <div class="et_pb_blurb_container">
                              <h4 class="et_pb_module_header">
                                <span>Easy To Use</span>
                              </h4>
                              <div class="et_pb_blurb_description">
                                <p style="font-weight: 400; color: white">
                                  <span
                                    >Everhost is designed for non-technical
                                    users to easily create and manage.</span
                                  >
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="et_pb_column et_pb_column_1_3 et_pb_column_32 et_pb_css_mix_blend_mode_passthrough"
                      >
                        <div
                          class="et_pb_module et_pb_blurb et_pb_blurb_4 et_animated et_pb_text_align_left et_pb_blurb_position_top et_pb_bg_layout_light et_pb_with_background"
                        >
                          <div class="et_pb_blurb_content">
                            <div class="et_pb_blurb_container">
                              <h4 class="et_pb_module_header">
                                <span>Quick Setup</span>
                              </h4>
                              <div class="et_pb_blurb_description">
                                <p style="font-weight: 400; color: white">
                                  <span
                                    >Start sending out your property&#8217;s
                                    welcome book in as little as 10
                                    minutes.</span
                                  >
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="et_pb_column et_pb_column_1_3 et_pb_column_33 et_pb_css_mix_blend_mode_passthrough et-last-child"
                      >
                        <div
                          class="et_pb_module et_pb_blurb et_pb_blurb_5 et_animated et_pb_text_align_left et_pb_blurb_position_top et_pb_bg_layout_light et_pb_with_background"
                        >
                          <div class="et_pb_blurb_content">
                            <div class="et_pb_blurb_container">
                              <h4 class="et_pb_module_header">
                                <span>Message Templates</span>
                              </h4>
                              <div class="et_pb_blurb_description">
                                <p style="font-weight: 400; color: white">
                                  No more long message threads.  Keep it simple
                                  and add your digital welcome book link.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="et_pb_row et_pb_row_16 et_pb_gutters2">
                      <div
                        class="et_pb_column et_pb_column_1_3 et_pb_column_34 et_pb_css_mix_blend_mode_passthrough"
                      >
                        <div
                          class="et_pb_module et_pb_blurb et_pb_blurb_6 et_animated et_pb_text_align_left et_pb_blurb_position_top et_pb_bg_layout_light et_pb_with_background"
                        >
                          <div class="et_pb_blurb_content">
                            <div class="et_pb_blurb_container">
                              <h4 class="et_pb_module_header">
                                <span>Nearby Guide</span>
                              </h4>
                              <div class="et_pb_blurb_description">
                                <p style="font-weight: 400; color: white">
                                  Effortlessly provide highly rated restaurants
                                  and places to visit to your guests.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="et_pb_column et_pb_column_1_3 et_pb_column_35 et_pb_css_mix_blend_mode_passthrough"
                      >
                        <div
                          class="et_pb_module et_pb_blurb et_pb_blurb_7 et_animated et_pb_text_align_left et_pb_blurb_position_top et_pb_bg_layout_light et_pb_with_background"
                        >
                          <div class="et_pb_blurb_content">
                            <div class="et_pb_blurb_container">
                              <h4 class="et_pb_module_header">
                                <span>Pro Tools</span>
                              </h4>
                              <div class="et_pb_blurb_description">
                                <p style="font-weight: 400; color: white">
                                  Upgrade to add your branding, upload custom
                                  themes, and create unlimited welcome books.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="et_pb_column et_pb_column_1_3 et_pb_column_36 et_pb_css_mix_blend_mode_passthrough et-last-child"
                      >
                        <div
                          class="et_pb_module et_pb_blurb et_pb_blurb_8 et_animated et_pb_text_align_left et_pb_blurb_position_top et_pb_bg_layout_light et_pb_with_background"
                        >
                          <div class="et_pb_blurb_content">
                            <div class="et_pb_blurb_container">
                              <h4 class="et_pb_module_header">
                                <span>Free, Forever</span>
                              </h4>
                              <div class="et_pb_blurb_description">
                                <p style="font-weight: 400; color: white">
                                  <span
                                    >Build digital welcome books for up to 10
                                    properties, at no cost.</span
                                  >
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="et_pb_section et_pb_section_8 et_section_regular">
                    <Accordian />
                  </div>
                  <div class="et_pb_row et_pb_row_19">
                    <div
                      class="et_pb_column et_pb_column_4_4 et_pb_column_38 et_pb_css_mix_blend_mode_passthrough et-last-child"
                    >
                      <div
                        class="et_pb_button_module_wrapper et_pb_button_0_wrapper et_pb_button_alignment_center et_pb_module"
                      >
                        <a
                          class="et_pb_button et_pb_button_0 et_pb_bg_layout_light"
                          href="https://manage.everhost.io/signup"
                          data-icon="&#xf105;"
                          >Get Started Today!</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
      <footer class="et-l et-l--footer">
        <div class="et_builder_inner_content et_pb_gutters3">
          <div
            class="et_pb_section et_pb_section_0_tb_footer et_pb_with_background et_section_regular"
          >
            <div class="et_pb_row et_pb_row_0_tb_footer">
              <div
                class="et_pb_column et_pb_column_4_4 et_pb_column_0_tb_footer et_pb_css_mix_blend_mode_passthrough et-last-child"
              >
                <div
                  class="et_pb_module et_pb_text et_pb_text_0_tb_footer et_pb_text_align_center et_pb_bg_layout_light"
                >
                  <div class="et_pb_text_inner">
                    ©{{ year }} Everhost. All Rights Reserved. |
                    support@everhost.io
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div
        class="wpml-ls-statics-footer wpml-ls wpml-ls-legacy-list-horizontal"
      >
        <ul>
          <li
            class="wpml-ls-slot-footer wpml-ls-item wpml-ls-item-pt-br wpml-ls-first-item wpml-ls-item-legacy-list-horizontal"
          >
            <a href="https://hello.everhost.io/pt-br/" class="wpml-ls-link">
              <img
                class="wpml-ls-flag"
                src="https://hello.everhost.io/wp-content/plugins/sitepress-multilingual-cms/res/flags/pt-brsimple.png"
                alt=""
                width="18"
                height="12"
              />
              <span class="wpml-ls-native" lang="pt-br">Português</span>
            </a>
          </li>
          <li
            class="wpml-ls-slot-footer wpml-ls-item wpml-ls-item-pt-pt wpml-ls-item-legacy-list-horizontal"
          >
            <a href="https://hello.everhost.io/pt-pt/" class="wpml-ls-link">
              <img
                class="wpml-ls-flag"
                src="https://hello.everhost.io/wp-content/plugins/sitepress-multilingual-cms/res/flags/pt-pt.png"
                alt=""
                width="18"
                height="12"
              />
              <span class="wpml-ls-native" lang="pt-pt">Português</span>
            </a>
          </li>
          <li
            class="wpml-ls-slot-footer wpml-ls-item wpml-ls-item-es wpml-ls-last-item wpml-ls-item-legacy-list-horizontal"
          >
            <a href="https://hello.everhost.io/es/" class="wpml-ls-link">
              <img
                class="wpml-ls-flag"
                src="https://hello.everhost.io/wp-content/plugins/sitepress-multilingual-cms/res/flags/es.png"
                alt=""
                width="18"
                height="12"
              />
              <span class="wpml-ls-native" lang="es">Español</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import Benefit from "~/components/benefit.vue";

const isModalOpen = ref(false);
const year = computed(() => new Date().getFullYear());

const themes = ref([
  {
    img: "/images/5.png",
  },
  {
    img: "/images/6.png",
  },
  {
    img: "/images/7.png",
  },
  {
    img: "/images/8.png",
  },
  {
    img: "/images/9.png",
  },
  {
    img: "/images/10.png",
  },
]);

const platforms = ref([
  {
    img: "/images/Airbnb.png",
    title: "Airbnb",
  },
  {
    img: "/images/vrbo.jpg",
    title: "Vrbo",
  },
  {
    img: "/images/Booking.png",
    title: "Booking.com",
  },
  {
    img: "/images/Expedia.png",
    title: "Expedia",
  },
  {
    img: "/images/FlipKey.png",
    title: "Flipkey",
  },
  {
    img: "/images/Booking.png",
    title: "Booking",
  },
  {
    img: "/images/Host-Away-Logo.jpg",
    title: "Host Away",
  },
  {
    img: "/images/Guesty.png",
    title: "Guesty",
  },
  {
    img: "/images/Vacasa.png",
    title: "Vacasa",
  },
]);

const communicationBenefits = ref({
  title: "Eliminate the back and forth communication",
  descriptions: [
    "No more long message threads.",
    "Include a convenient FAQ section",
    "Add explainer and how-to videos",
    "All your property information in one place",
  ],
  image: "/images/Guest-Welcome-Book.png",
  imagePlacement: "right",
});

const localBenefits = ref({
  title: "Help your guests stay like a local",
  descriptions: [
    "Delight your guests by sharing your favorites places and avoiding the tourist traps.",
    "Property and area guide to help guests plan their stay",
    "Guest access to highly rated nearby restaurants, attractions, and events. Plus local deals and discounts.",
  ],
  image: "/images/Airbnb-Welcome-Book.png",
  imagePlacement: "left",
});

const guestsBenefits = ref({
  title: "Empower your guests",
  descriptions: [
    "House rules, how-to videos, customizable area guide to help your guests plan their trip and enjoy their stay.",
    "Provide answers all in one place.",
    "Reduce or eliminate the back and forth communication with guests.",
  ],
  image: "/images/Guest-Welcome-Book.png",
  imagePlacement: "right",
});
</script>

<style>
.eh-text-bold {
  font-weight: bold;
  font-size: 1.5em;
  line-height: 1.2;
}

.eh-text-bolder {
  font-weight: bolder;
  font-size: 2em;
  line-height: 1.2;
}

.eh-text-center {
  text-align: center;
}

.platforms-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}
.platforms-grid img {
  width: 113px;
  height: 113px;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(140, 76, 219, 0.1);
}

#page-container {
  background: #fff;
  min-height: 100vh;
  margin: 0 auto;
  max-width: calc(100% - 2rem);
  width: 100%;

  @media (min-width: 640px) {
    max-width: calc(100% - 4rem);
  }

  @media (min-width: 1024px) {
    max-width: 1200px;
  }
}

.et_pb_text_inner span {
  background: linear-gradient(180deg, #6c4ad3 0%, #893393 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-weight: 700;
}

.et_pb_button,
.et_pb_button_one,
.et_pb_button_two {
  background: linear-gradient(90deg, #6c4ad3 0%, #893393 100%);
  color: #fff !important;
  border: none;
  border-radius: 5px;
  padding: 0.75em 2em;
  font-weight: 600;
  font-size: 1.1em;
  box-shadow: 0 2px 16px 0 rgba(140, 76, 219, 0.15);
  transition: background 0.2s, box-shadow 0.2s;
  margin: 0 0.5em 1em 0;
  text-decoration: none;
  display: inline-block;
}
.et_pb_button:hover {
  background: linear-gradient(90deg, #893393 0%, #6c4ad3 100%);
  box-shadow: 0 4px 24px 0 rgba(140, 76, 219, 0.25);
}

.et_pb_section,
.et_pb_row,
.et_pb_column {
  box-sizing: border-box;
}

.et_pb_section {
  margin-bottom: 2.5rem;
  padding: 2rem 0;
  background: #fff;
  border-radius: 24px;
  box-shadow: none;
}

.et_pb_row {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  align-items: center;
}

.et_pb_column {
  flex: 1 1 300px;
  min-width: 280px;
  max-width: 600px;
}

.et_pb_text_inner p {
  font-size: 1.25em;
  line-height: 1.5;
  margin: 0.5em 0;
}

.et_pb_blurb {
  background: #f7f7fa;
  border-radius: 18px;
  padding: 1.5em 1em;
  box-shadow: 0 2px 12px 0 rgba(140, 76, 219, 0.06);
  margin-bottom: 1.5em;
}

.et_pb_blurb .et_pb_module_header {
  font-size: 1.2em;
  font-weight: 700;
  margin-bottom: 0.5em;
}

.et_pb_blurb_description p {
  font-size: 1em;
  color: #555;
}

.et_pb_with_background {
  background-color: #1d3557;
  padding: 20px;
  color: white;
}

.dsm_card_carousel_child {
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 2px 12px 0 rgba(140, 76, 219, 0.08);
  padding: 2em 1.5em;
  margin: 1em;
  min-width: 320px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.dsm_card_title {
  font-size: 1.1em;
  font-weight: 600;
  margin: 1em 0 0.5em 0;
  color: #22223b;
}

.dsm_card_carousel_child_subtitle {
  font-size: 0.95em;
  color: #6c4ad3;
  margin-bottom: 0.5em;
}

.dsm_card_carousel_child_description p {
  color: black;
  font-size: 1.2em;
  margin: 0;
}

.et_pb_image_wrap img {
  border-radius: 18px;
  max-width: 100%;
  height: auto;
  box-shadow: none;
}

.et_pb_video_box iframe {
  border-radius: 18px;
  box-shadow: 0 2px 24px 0 rgba(140, 76, 219, 0.1);
  width: 100%;
  max-width: 800px;
  min-height: 350px;
}

.et_pb_button_module_wrappers {
  margin: 1.5em 0;
}

.et_pb_text_align_center {
  text-align: center;
}

footer.et-l--footer {
  background: #fff;
  border-radius: 24px 24px 0 0;
  box-shadow: 0 -2px 24px 0 rgba(140, 76, 219, 0.06);
  margin-top: 3em;
  padding: 2em 0 1em 0;
  text-align: center;
  font-size: 1em;
  color: #6c4ad3;
}

.wpml-ls-statics-footer {
  margin: 2em auto 0 auto;
  text-align: center;
}
.wpml-ls-statics-footer ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: inline-flex;
  gap: 1.5em;
}
.wpml-ls-statics-footer li {
  display: inline-flex;
  align-items: center;
}
.wpml-ls-statics-footer img {
  margin-right: 0.5em;
  border-radius: 2px;
  border: 1px solid #eee;
}
.wpml-ls-link {
  color: #6c4ad3;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}
.wpml-ls-link:hover {
  color: #893393;
}

@media (max-width: 900px) {
  .et_pb_row {
    flex-direction: column;
    gap: 1.5rem;
  }
  .et_pb_section {
    padding: 1.2rem 0.5rem;
  }
}

@media (max-width: 600px) {
  .et_pb_section {
    border-radius: 0;
    box-shadow: none;
    margin-bottom: 1.2rem;
    padding: 0.5rem 0.2rem;
  }
  .dsm_card_carousel_child {
    min-width: 90vw;
    max-width: 98vw;
    padding: 1em 0.5em;
  }
  .et_pb_video_box iframe {
    min-height: 180px;
  }
}
</style>

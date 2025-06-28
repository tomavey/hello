<template>
  <div class="et_pb_row et_pb_row_4">
    <div
      class="et_pb_column et_pb_column_1_2 et_pb_column_7 et_pb_css_mix_blend_mode_passthrough"
    >
      <div
        class="et_pb_module et_pb_text et_pb_text_4 et_pb_text_align_left et_pb_text_align_center-phone et_pb_bg_layout_light"
      >
        <div class="et_pb_text_inner">
          <p>{{ benefits.title }}</p>
        </div>
      </div>
      <div class="et_pb_module dsm_icon_list dsm_icon_list_0 multimediaSecIcon">
        <div class="et_pb_module_inner">
          <ul
            class="dsm_icon_list_items dsm_icon_list_ltr_direction dsm_icon_list_layout_vertical"
          >
            <li
              v-for="(description, index) in benefits.descriptions"
              :key="index"
              class="dsm_icon_list_child dsm_icon_list_child_0"
            >
              <span class="dsm_icon_list_wrapper"
                ><span class="dsm_icon_list_icon">
                  <list-checkmark /> </span></span
              ><span class="dsm_icon_list_text">{{ description }}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="et_pb_module dsm_button dsm_button_1 et_pb_bg_layout_light">
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
            src="/images/Guest-Welcome-Book.png"
            alt="mobile everhost"
            title="Guest Welcome Book"
            data-lazy-sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 690px, 100vw"
            class="wp-image-1405"
            data-lazy-src="/images/Guest-Welcome-Book.png"
        /></span>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps<{ benefits: object }>();
</script>

<style scoped>
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
</style>

<template>
  <div
    id="heroVid"
    class="et_pb_section et_pb_section_1 et_pb_with_background et_section_regular"
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
              With Everhost you can create a welcome book in less than 10
              MINUTES! Try it FREE!
            </p>
          </div>
        </div>
        <div class="et_pb_module et_pb_video et_pb_video_0">
          <div class="et_pb_video_box">
            <iframe
              src="https://www.youtube.com/embed/ZPxOg5WXuHQ"
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
</template>

<script lang="ts" setup></script>

<style scoped>
.et_pb_column_4_4 {
  max-width: 800px;
  width: 100%;
}

.et_pb_video_box {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
}

.et_pb_video_box iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
  border-radius: 18px;
  box-shadow: 0 2px 24px 0 rgba(140, 76, 219, 0.1);
}
</style>

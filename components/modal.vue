<template>
  <Teleport to="body">
    <transition name="gb-modal-fade">
      <div v-if="modelValue" class="gb-modal-overlay gb" @click.self="close">
        <div class="gb-modal" :class="modalClass">
          <div class="gb-modal-header">
            <slot name="header">
              <div class="gb-modal-title">
                <slot name="title"></slot>
              </div>
            </slot>
            <button class="gb-modal-close" @click="close">
              <img src="~/assets/icons/Close-red.svg" />
            </button>
          </div>

          <div class="gb-modal-content">
            <slot>

            </slot>
          </div>

          <div class="gb-modal-footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script lang="ts" setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  modalClass: {
    type: [String, Object, Array],
    default: ''
  }
});

const emit = defineEmits(['update:modelValue']);

const close = () => {
  emit('update:modelValue', false);
};
</script>

<style lang="scss" scoped>
.gb-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
}

.gb-modal {
  background: white;
  border-radius: 10px;
  padding: 16px;
  width: 90%;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  max-height: 90vh;
  overflow-y: auto;
}

.gb-modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .gb-modal-title {
    font-size: 20px;
    font-weight: 500;
    font-family: Sailec, arial, sans-serif;
    color: #1d3557;
  }

}

.gb-modal-content {
  text-align: center;
  
  .check {
    margin-bottom: 1rem;
    width: 48px;
    height: 48px;
  }
  
  h6 {
    font-size: 1.25rem;
    margin: 0.5rem 0;
  }
  
  p {
    color: rgba(0, 0, 0, 0.6);
  }
}

.gb-modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
}

.gb-modal-close {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  .close-img {
    width: 20px;
    height: 20px;
  }
}

/* Transition animations */
.gb-modal-fade-enter-active,
.gb-modal-fade-leave-active {
  transition: opacity 0.2s ease;
}

.gb-modal-fade-enter-from,
.gb-modal-fade-leave-to {
  opacity: 0;
}
</style>
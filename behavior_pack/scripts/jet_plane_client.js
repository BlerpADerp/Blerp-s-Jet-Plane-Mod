let wheelsUp = false;

const jetPlaneClient = {
  init() {
    this.registerEvent("minecraft:client_tick", () => {
      const player = this.getPlayer();
      if (!player) return;

      const ridingEntity = player.getRidingEntity();
      if (!ridingEntity || ridingEntity.__identifier__ !== "blerp:jet_plane") return;

      const input = player.getInput();

      if (input.forward.justPressed) {
        wheelsUp = !wheelsUp;
        ridingEntity.setAnimationState("wheelsUp", wheelsUp);
      }
    });
  }
};

jetPlaneClient.init();

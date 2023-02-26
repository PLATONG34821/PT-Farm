ll.registerPlugin('PT-Farm', 'Safeguard Your Farm.', [1,0,0]);

mc.listen("onFarmLandDecay", (pos, entity) => {
    if(entity.isPlayer()) {
      log(entity.name," Try To Break Farmland at ",pos)
      return false;
    }
});

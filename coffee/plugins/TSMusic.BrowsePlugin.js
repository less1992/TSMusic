// Generated by CoffeeScript 1.6.2
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  TSMusic.BrowsePlugin = (function(_super) {
    __extends(BrowsePlugin, _super);

    BrowsePlugin.type = "browse";

    function BrowsePlugin(name) {
      BrowsePlugin.__super__.constructor.call(this, name);
      this.div = null;
      this.button = null;
      this.visible = false;
    }

    BrowsePlugin.prototype._init = function() {
      var flag, index, plugin, _ref, _ref1;

      if ((_ref = this.button) != null) {
        _ref.style.display = "";
      }
      flag = false;
      _ref1 = this.widget.plugins;
      for (index in _ref1) {
        plugin = _ref1[index];
        if (plugin !== this) {
          if (plugin instanceof TSMusic.BrowsePlugin && plugin.visible) {
            flag = true;
            break;
          }
        }
      }
      if (!flag) {
        return this.show();
      }
    };

    BrowsePlugin.prototype._uninit = function() {
      var index, plugin, _ref, _ref1;

      if ((_ref = this.button) != null) {
        _ref.style.display = "none";
      }
      if (this.visible) {
        _ref1 = this.widget.plugins;
        for (index in _ref1) {
          plugin = _ref1[index];
          if (plugin !== this) {
            if (plugin instanceof TSMusic.BrowsePlugin) {
              plugin.show();
              break;
            }
          }
        }
        return this.hide();
      }
    };

    BrowsePlugin.prototype.show = function() {
      var index, plugin, _ref, _ref1, _ref2;

      if (!this.widget) {
        return;
      }
      _ref = this.widget.plugins;
      for (index in _ref) {
        plugin = _ref[index];
        if (plugin !== this) {
          if (plugin instanceof TSMusic.BrowsePlugin && plugin.visible) {
            plugin.hide();
            break;
          }
        }
      }
      this.visible = true;
      if ((_ref1 = this.div) != null) {
        _ref1.style.display = "";
      }
      if ((_ref2 = this.button) != null) {
        _ref2.className = "on";
      }
      return this.widget.browse_type = this.constructor.type;
    };

    BrowsePlugin.prototype.hide = function() {
      var _ref, _ref1;

      if (!this.widget) {
        return;
      }
      this.visible = false;
      if ((_ref = this.div) != null) {
        _ref.style.display = "none";
      }
      if ((_ref1 = this.button) != null) {
        _ref1.className = "";
      }
      return this.widget.browse_type = this.constructor.type;
    };

    return BrowsePlugin;

  })(TSMusic.Plugin);

}).call(this);

/**
 * Created by jiangyangyang on 2018/4/18.
 */
function Rect(n,color,RectColor)
{
    createjs.Shape.call(this);
    //图的颜色类型
    this.setRectType = function (type)
    {
        this._RectType = type;
        switch (type)
        {
            case 1 :
                this.setColor(color);
                break;
            case 2:
                this.setColor("#ff0000");
                break;
        }
    }
    //画图
    this.setColor = function (ColorString)
    {
        this.graphics.beginFill(ColorString);
        this.graphics.drawRect(0,0,400/n-5,400/n-5);
        this.graphics.endFill();
    }

    this.getRectType = function()
    {
        return this._RectType;
    }

    //设置默认值
    this.setRectType(1);
}

Rect.prototype = new createjs.Shape();
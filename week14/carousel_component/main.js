import { createElement } from './createElement';

class Carousel {
  constructor(config) {
    this.children = [];
    this.attributes = new Map();
    this.propertise = new Map();
  }

  setAttribute(name, value) {
    this[name] = value;
  }

  appendChild(child) {
    this.children.push(child);
  }

  render() {
    let children = this.data.map((url) => {
      let element = <img src={url} />;
      element.addEventListener('dragstart', (event) => event.preventDefault());
      return element;
    });
    let root = <div class="carousel">{children}</div>;
    let position = 0;

    let nextPic = () => {
      let nextPosition = (position + 1) % this.data.length;

      let current = children[position];
      let next = children[nextPosition];

      // 这里设置transition，是为了将内容提前移动下一张，并且设置trasition，让这里的变化无感知
      current.style.transition = 'ease 0s';
      next.style.transition = 'ease 0s';
      current.style.transform = `translateX(${-100 * position}%)`;
      next.style.transform = `translateX(${100 - 100 * nextPosition}%)`;

      requestAnimationFrame(() => {
        // 需要等一帧，前一个requestAnimationFrame上一个帧数的回调
        requestAnimationFrame(() => {
          // setTimeout(()=> {
          current.style.transition = ''; // css控制，这里将上面的trasition清空
          next.style.transition = '';
          current.style.transform = `translateX(${-100 - 100 * position}%)`;
          next.style.transform = `translateX(${-100 * nextPosition}%)`;
          position = nextPosition;
          //  }, 16)
        });
      });

      setTimeout(nextPic, 3000);
    };
    setTimeout(nextPic, 3000);

    root.addEventListener('mousedown', (event) => {
      let startX = event.clientX,
        startY = event.clientY;

      let lastPosition = (position - 1 + this.data.length) % this.data.length;
      let nextPosition = (position + 1) % this.data.length;
      let current = children[position];
      let last = children[lastPosition];
      let next = children[nextPosition];

      current.style.transition = 'ease 0s';
      next.style.transition = 'ease 0s';
      last.style.transition = 'ease 0s';
      current.style.transform = `translateX(${-500 * position}px)`;
      last.style.transform = `translateX(${-500 - 500 * lastPosition}px)`;
      next.style.transform = `translateX(${500 - 500 * nextPosition}px)`;

      let move = (event) => {
        current.style.transform = `translateX(${
          event.clientX - startX - 500 * position
        }px)`;
        last.style.transform = `translateX(${
          event.clientX - startX - 500 - 500 * lastPosition
        }px)`;
        next.style.transform = `translateX(${
          event.clientX - startX + 500 - 500 * nextPosition
        }px)`;
        // console.log(event.clientX - startX, event.clientX - startY);
      };
      let up = (event) => {
        let offset = 0;

        if (event.clientX - startX > 250) {
          offset = 1;
        } else if (event.clientX - startX < -250) {
          offset = -1;
        }

        current.style.transition = '';
        next.style.transition = '';
        last.style.transition = '';

        current.style.transform = `translateX(${
          offset * 500 - 500 * position
        }px)`;
        last.style.transform = `translateX(${
          offset * 500 - 500 - 500 * lastPosition
        }px)`;
        next.style.transform = `translateX(${
          offset * 500 + 500 - 500 * nextPosition
        }px)`;

        position = (position - offset + this.data.length) % this.data.length;

        root.removeEventListener('mousemove', move);
        root.removeEventListener('mouseup', up);
      };
      root.addEventListener('mousemove', move);
      root.addEventListener('mouseup', up);
    });

    return root;
  }

  mountTo(parent) {
    this.render().mountTo(parent);
  }
}

let component = (
  <Carousel
    data={[
      'https://static001.geekbang.org/resource/image/bb/21/bb38fb7c1073eaee1755f81131f11d21.jpg',
      'https://static001.geekbang.org/resource/image/1b/21/1b809d9a2bdf3ecc481322d7c9223c21.jpg',
      'https://static001.geekbang.org/resource/image/b6/4f/b6d65b2f12646a9fd6b8cb2b020d754f.jpg',
      'https://static001.geekbang.org/resource/image/73/e4/730ea9c393def7975deceb48b3eb6fe4.jpg',
    ]}
  />
);

component.mountTo(document.body);
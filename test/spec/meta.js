import { createModel } from '../helper';

import MetaModel from '../fixtures/model/meta';


describe('meta', function() {

  var model = createModel([ MetaModel ]);

  it('should have the "meta" attribute', function() {

    // when
    var meta = model.getTypeDescriptor('c:Car').meta;

    // then
    expect(meta).to.exist;
    expect(meta).to.be.an('object');
  });


  it('should have a "owners" property inside "meta"', function() {

    // when
    var meta = model.getTypeDescriptor('c:Car').meta;

    // then
    expect(meta.owners).to.exist;
    expect(meta.owners).to.eql([ 'the pope', 'donald trump' ]);
  });

});

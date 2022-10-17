/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = require('./product_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.ProductServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.ProductServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ProductProto,
 *   !proto.ProductResponse>}
 */
const methodDescriptor_ProductService_Insert = new grpc.web.MethodDescriptor(
  '/ProductService/Insert',
  grpc.web.MethodType.UNARY,
  proto.ProductProto,
  proto.ProductResponse,
  /**
   * @param {!proto.ProductProto} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ProductResponse.deserializeBinary
);


/**
 * @param {!proto.ProductProto} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ProductResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ProductResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ProductServiceClient.prototype.insert =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ProductService/Insert',
      request,
      metadata || {},
      methodDescriptor_ProductService_Insert,
      callback);
};


/**
 * @param {!proto.ProductProto} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ProductResponse>}
 *     Promise that resolves to the response
 */
proto.ProductServicePromiseClient.prototype.insert =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ProductService/Insert',
      request,
      metadata || {},
      methodDescriptor_ProductService_Insert);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.EmptyProduct,
 *   !proto.Products>}
 */
const methodDescriptor_ProductService_GetAll = new grpc.web.MethodDescriptor(
  '/ProductService/GetAll',
  grpc.web.MethodType.UNARY,
  proto.EmptyProduct,
  proto.Products,
  /**
   * @param {!proto.EmptyProduct} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Products.deserializeBinary
);


/**
 * @param {!proto.EmptyProduct} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Products)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Products>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ProductServiceClient.prototype.getAll =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ProductService/GetAll',
      request,
      metadata || {},
      methodDescriptor_ProductService_GetAll,
      callback);
};


/**
 * @param {!proto.EmptyProduct} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Products>}
 *     Promise that resolves to the response
 */
proto.ProductServicePromiseClient.prototype.getAll =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ProductService/GetAll',
      request,
      metadata || {},
      methodDescriptor_ProductService_GetAll);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.PagingProductRequest,
 *   !proto.PagingProductResponse>}
 */
const methodDescriptor_ProductService_GetPaging = new grpc.web.MethodDescriptor(
  '/ProductService/GetPaging',
  grpc.web.MethodType.UNARY,
  proto.PagingProductRequest,
  proto.PagingProductResponse,
  /**
   * @param {!proto.PagingProductRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.PagingProductResponse.deserializeBinary
);


/**
 * @param {!proto.PagingProductRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.PagingProductResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.PagingProductResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ProductServiceClient.prototype.getPaging =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ProductService/GetPaging',
      request,
      metadata || {},
      methodDescriptor_ProductService_GetPaging,
      callback);
};


/**
 * @param {!proto.PagingProductRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.PagingProductResponse>}
 *     Promise that resolves to the response
 */
proto.ProductServicePromiseClient.prototype.getPaging =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ProductService/GetPaging',
      request,
      metadata || {},
      methodDescriptor_ProductService_GetPaging);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ProductRowIdFilter,
 *   !proto.ProductProto>}
 */
const methodDescriptor_ProductService_GetById = new grpc.web.MethodDescriptor(
  '/ProductService/GetById',
  grpc.web.MethodType.UNARY,
  proto.ProductRowIdFilter,
  proto.ProductProto,
  /**
   * @param {!proto.ProductRowIdFilter} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ProductProto.deserializeBinary
);


/**
 * @param {!proto.ProductRowIdFilter} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ProductProto)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ProductProto>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ProductServiceClient.prototype.getById =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ProductService/GetById',
      request,
      metadata || {},
      methodDescriptor_ProductService_GetById,
      callback);
};


/**
 * @param {!proto.ProductRowIdFilter} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ProductProto>}
 *     Promise that resolves to the response
 */
proto.ProductServicePromiseClient.prototype.getById =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ProductService/GetById',
      request,
      metadata || {},
      methodDescriptor_ProductService_GetById);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ProductProto,
 *   !proto.ProductResponse>}
 */
const methodDescriptor_ProductService_Put = new grpc.web.MethodDescriptor(
  '/ProductService/Put',
  grpc.web.MethodType.UNARY,
  proto.ProductProto,
  proto.ProductResponse,
  /**
   * @param {!proto.ProductProto} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ProductResponse.deserializeBinary
);


/**
 * @param {!proto.ProductProto} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ProductResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ProductResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ProductServiceClient.prototype.put =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ProductService/Put',
      request,
      metadata || {},
      methodDescriptor_ProductService_Put,
      callback);
};


/**
 * @param {!proto.ProductProto} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ProductResponse>}
 *     Promise that resolves to the response
 */
proto.ProductServicePromiseClient.prototype.put =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ProductService/Put',
      request,
      metadata || {},
      methodDescriptor_ProductService_Put);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ProductRowIdFilter,
 *   !proto.ProductResponse>}
 */
const methodDescriptor_ProductService_Delete = new grpc.web.MethodDescriptor(
  '/ProductService/Delete',
  grpc.web.MethodType.UNARY,
  proto.ProductRowIdFilter,
  proto.ProductResponse,
  /**
   * @param {!proto.ProductRowIdFilter} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ProductResponse.deserializeBinary
);


/**
 * @param {!proto.ProductRowIdFilter} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ProductResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ProductResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ProductServiceClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ProductService/Delete',
      request,
      metadata || {},
      methodDescriptor_ProductService_Delete,
      callback);
};


/**
 * @param {!proto.ProductRowIdFilter} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ProductResponse>}
 *     Promise that resolves to the response
 */
proto.ProductServicePromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ProductService/Delete',
      request,
      metadata || {},
      methodDescriptor_ProductService_Delete);
};


module.exports = proto;


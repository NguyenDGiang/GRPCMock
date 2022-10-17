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
const proto = require('./productDetail_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.ProductDetailServiceClient =
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
proto.ProductDetailServicePromiseClient =
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
 *   !proto.ProductDetailProto,
 *   !proto.ProductDetailResponse>}
 */
const methodDescriptor_ProductDetailService_Insert = new grpc.web.MethodDescriptor(
  '/ProductDetailService/Insert',
  grpc.web.MethodType.UNARY,
  proto.ProductDetailProto,
  proto.ProductDetailResponse,
  /**
   * @param {!proto.ProductDetailProto} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ProductDetailResponse.deserializeBinary
);


/**
 * @param {!proto.ProductDetailProto} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ProductDetailResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ProductDetailResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ProductDetailServiceClient.prototype.insert =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ProductDetailService/Insert',
      request,
      metadata || {},
      methodDescriptor_ProductDetailService_Insert,
      callback);
};


/**
 * @param {!proto.ProductDetailProto} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ProductDetailResponse>}
 *     Promise that resolves to the response
 */
proto.ProductDetailServicePromiseClient.prototype.insert =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ProductDetailService/Insert',
      request,
      metadata || {},
      methodDescriptor_ProductDetailService_Insert);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.EmptyProductDetail,
 *   !proto.ProductDetails>}
 */
const methodDescriptor_ProductDetailService_GetAll = new grpc.web.MethodDescriptor(
  '/ProductDetailService/GetAll',
  grpc.web.MethodType.UNARY,
  proto.EmptyProductDetail,
  proto.ProductDetails,
  /**
   * @param {!proto.EmptyProductDetail} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ProductDetails.deserializeBinary
);


/**
 * @param {!proto.EmptyProductDetail} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ProductDetails)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ProductDetails>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ProductDetailServiceClient.prototype.getAll =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ProductDetailService/GetAll',
      request,
      metadata || {},
      methodDescriptor_ProductDetailService_GetAll,
      callback);
};


/**
 * @param {!proto.EmptyProductDetail} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ProductDetails>}
 *     Promise that resolves to the response
 */
proto.ProductDetailServicePromiseClient.prototype.getAll =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ProductDetailService/GetAll',
      request,
      metadata || {},
      methodDescriptor_ProductDetailService_GetAll);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.PagingProductDetailRequest,
 *   !proto.PagingProductDetailResponse>}
 */
const methodDescriptor_ProductDetailService_GetPaging = new grpc.web.MethodDescriptor(
  '/ProductDetailService/GetPaging',
  grpc.web.MethodType.UNARY,
  proto.PagingProductDetailRequest,
  proto.PagingProductDetailResponse,
  /**
   * @param {!proto.PagingProductDetailRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.PagingProductDetailResponse.deserializeBinary
);


/**
 * @param {!proto.PagingProductDetailRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.PagingProductDetailResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.PagingProductDetailResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ProductDetailServiceClient.prototype.getPaging =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ProductDetailService/GetPaging',
      request,
      metadata || {},
      methodDescriptor_ProductDetailService_GetPaging,
      callback);
};


/**
 * @param {!proto.PagingProductDetailRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.PagingProductDetailResponse>}
 *     Promise that resolves to the response
 */
proto.ProductDetailServicePromiseClient.prototype.getPaging =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ProductDetailService/GetPaging',
      request,
      metadata || {},
      methodDescriptor_ProductDetailService_GetPaging);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ProductDetailRowIdFilter,
 *   !proto.ProductDetailProto>}
 */
const methodDescriptor_ProductDetailService_GetById = new grpc.web.MethodDescriptor(
  '/ProductDetailService/GetById',
  grpc.web.MethodType.UNARY,
  proto.ProductDetailRowIdFilter,
  proto.ProductDetailProto,
  /**
   * @param {!proto.ProductDetailRowIdFilter} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ProductDetailProto.deserializeBinary
);


/**
 * @param {!proto.ProductDetailRowIdFilter} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ProductDetailProto)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ProductDetailProto>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ProductDetailServiceClient.prototype.getById =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ProductDetailService/GetById',
      request,
      metadata || {},
      methodDescriptor_ProductDetailService_GetById,
      callback);
};


/**
 * @param {!proto.ProductDetailRowIdFilter} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ProductDetailProto>}
 *     Promise that resolves to the response
 */
proto.ProductDetailServicePromiseClient.prototype.getById =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ProductDetailService/GetById',
      request,
      metadata || {},
      methodDescriptor_ProductDetailService_GetById);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ProductDetailProto,
 *   !proto.ProductDetailResponse>}
 */
const methodDescriptor_ProductDetailService_Put = new grpc.web.MethodDescriptor(
  '/ProductDetailService/Put',
  grpc.web.MethodType.UNARY,
  proto.ProductDetailProto,
  proto.ProductDetailResponse,
  /**
   * @param {!proto.ProductDetailProto} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ProductDetailResponse.deserializeBinary
);


/**
 * @param {!proto.ProductDetailProto} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ProductDetailResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ProductDetailResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ProductDetailServiceClient.prototype.put =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ProductDetailService/Put',
      request,
      metadata || {},
      methodDescriptor_ProductDetailService_Put,
      callback);
};


/**
 * @param {!proto.ProductDetailProto} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ProductDetailResponse>}
 *     Promise that resolves to the response
 */
proto.ProductDetailServicePromiseClient.prototype.put =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ProductDetailService/Put',
      request,
      metadata || {},
      methodDescriptor_ProductDetailService_Put);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ProductDetailRowIdFilter,
 *   !proto.ProductDetailResponse>}
 */
const methodDescriptor_ProductDetailService_Delete = new grpc.web.MethodDescriptor(
  '/ProductDetailService/Delete',
  grpc.web.MethodType.UNARY,
  proto.ProductDetailRowIdFilter,
  proto.ProductDetailResponse,
  /**
   * @param {!proto.ProductDetailRowIdFilter} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ProductDetailResponse.deserializeBinary
);


/**
 * @param {!proto.ProductDetailRowIdFilter} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ProductDetailResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ProductDetailResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ProductDetailServiceClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ProductDetailService/Delete',
      request,
      metadata || {},
      methodDescriptor_ProductDetailService_Delete,
      callback);
};


/**
 * @param {!proto.ProductDetailRowIdFilter} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ProductDetailResponse>}
 *     Promise that resolves to the response
 */
proto.ProductDetailServicePromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ProductDetailService/Delete',
      request,
      metadata || {},
      methodDescriptor_ProductDetailService_Delete);
};


module.exports = proto;


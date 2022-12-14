// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: Protos/product.proto
// </auto-generated>
#pragma warning disable 0414, 1591
#region Designer generated code

using grpc = global::Grpc.Core;

namespace GrpcServiceMock.Protos {
  public static partial class ProductService
  {
    static readonly string __ServiceName = "ProductService";

    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static void __Helper_SerializeMessage(global::Google.Protobuf.IMessage message, grpc::SerializationContext context)
    {
      #if !GRPC_DISABLE_PROTOBUF_BUFFER_SERIALIZATION
      if (message is global::Google.Protobuf.IBufferMessage)
      {
        context.SetPayloadLength(message.CalculateSize());
        global::Google.Protobuf.MessageExtensions.WriteTo(message, context.GetBufferWriter());
        context.Complete();
        return;
      }
      #endif
      context.Complete(global::Google.Protobuf.MessageExtensions.ToByteArray(message));
    }

    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static class __Helper_MessageCache<T>
    {
      public static readonly bool IsBufferMessage = global::System.Reflection.IntrospectionExtensions.GetTypeInfo(typeof(global::Google.Protobuf.IBufferMessage)).IsAssignableFrom(typeof(T));
    }

    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static T __Helper_DeserializeMessage<T>(grpc::DeserializationContext context, global::Google.Protobuf.MessageParser<T> parser) where T : global::Google.Protobuf.IMessage<T>
    {
      #if !GRPC_DISABLE_PROTOBUF_BUFFER_SERIALIZATION
      if (__Helper_MessageCache<T>.IsBufferMessage)
      {
        return parser.ParseFrom(context.PayloadAsReadOnlySequence());
      }
      #endif
      return parser.ParseFrom(context.PayloadAsNewBuffer());
    }

    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Marshaller<global::GrpcServiceMock.Protos.ProductProto> __Marshaller_ProductProto = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::GrpcServiceMock.Protos.ProductProto.Parser));
    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Marshaller<global::GrpcServiceMock.Protos.ProductResponse> __Marshaller_ProductResponse = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::GrpcServiceMock.Protos.ProductResponse.Parser));
    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Marshaller<global::GrpcServiceMock.Protos.EmptyProduct> __Marshaller_EmptyProduct = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::GrpcServiceMock.Protos.EmptyProduct.Parser));
    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Marshaller<global::GrpcServiceMock.Protos.Products> __Marshaller_Products = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::GrpcServiceMock.Protos.Products.Parser));
    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Marshaller<global::GrpcServiceMock.Protos.PagingProductRequest> __Marshaller_PagingProductRequest = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::GrpcServiceMock.Protos.PagingProductRequest.Parser));
    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Marshaller<global::GrpcServiceMock.Protos.PagingProductResponse> __Marshaller_PagingProductResponse = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::GrpcServiceMock.Protos.PagingProductResponse.Parser));
    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Marshaller<global::GrpcServiceMock.Protos.ProductRowIdFilter> __Marshaller_ProductRowIdFilter = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::GrpcServiceMock.Protos.ProductRowIdFilter.Parser));

    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Method<global::GrpcServiceMock.Protos.ProductProto, global::GrpcServiceMock.Protos.ProductResponse> __Method_Insert = new grpc::Method<global::GrpcServiceMock.Protos.ProductProto, global::GrpcServiceMock.Protos.ProductResponse>(
        grpc::MethodType.Unary,
        __ServiceName,
        "Insert",
        __Marshaller_ProductProto,
        __Marshaller_ProductResponse);

    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Method<global::GrpcServiceMock.Protos.EmptyProduct, global::GrpcServiceMock.Protos.Products> __Method_GetAll = new grpc::Method<global::GrpcServiceMock.Protos.EmptyProduct, global::GrpcServiceMock.Protos.Products>(
        grpc::MethodType.Unary,
        __ServiceName,
        "GetAll",
        __Marshaller_EmptyProduct,
        __Marshaller_Products);

    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Method<global::GrpcServiceMock.Protos.PagingProductRequest, global::GrpcServiceMock.Protos.PagingProductResponse> __Method_GetPaging = new grpc::Method<global::GrpcServiceMock.Protos.PagingProductRequest, global::GrpcServiceMock.Protos.PagingProductResponse>(
        grpc::MethodType.Unary,
        __ServiceName,
        "GetPaging",
        __Marshaller_PagingProductRequest,
        __Marshaller_PagingProductResponse);

    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Method<global::GrpcServiceMock.Protos.ProductRowIdFilter, global::GrpcServiceMock.Protos.ProductProto> __Method_GetById = new grpc::Method<global::GrpcServiceMock.Protos.ProductRowIdFilter, global::GrpcServiceMock.Protos.ProductProto>(
        grpc::MethodType.Unary,
        __ServiceName,
        "GetById",
        __Marshaller_ProductRowIdFilter,
        __Marshaller_ProductProto);

    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Method<global::GrpcServiceMock.Protos.ProductProto, global::GrpcServiceMock.Protos.ProductResponse> __Method_Put = new grpc::Method<global::GrpcServiceMock.Protos.ProductProto, global::GrpcServiceMock.Protos.ProductResponse>(
        grpc::MethodType.Unary,
        __ServiceName,
        "Put",
        __Marshaller_ProductProto,
        __Marshaller_ProductResponse);

    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Method<global::GrpcServiceMock.Protos.ProductRowIdFilter, global::GrpcServiceMock.Protos.ProductResponse> __Method_Delete = new grpc::Method<global::GrpcServiceMock.Protos.ProductRowIdFilter, global::GrpcServiceMock.Protos.ProductResponse>(
        grpc::MethodType.Unary,
        __ServiceName,
        "Delete",
        __Marshaller_ProductRowIdFilter,
        __Marshaller_ProductResponse);

    /// <summary>Service descriptor</summary>
    public static global::Google.Protobuf.Reflection.ServiceDescriptor Descriptor
    {
      get { return global::GrpcServiceMock.Protos.ProductReflection.Descriptor.Services[0]; }
    }

    /// <summary>Base class for server-side implementations of ProductService</summary>
    [grpc::BindServiceMethod(typeof(ProductService), "BindService")]
    public abstract partial class ProductServiceBase
    {
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual global::System.Threading.Tasks.Task<global::GrpcServiceMock.Protos.ProductResponse> Insert(global::GrpcServiceMock.Protos.ProductProto request, grpc::ServerCallContext context)
      {
        throw new grpc::RpcException(new grpc::Status(grpc::StatusCode.Unimplemented, ""));
      }

      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual global::System.Threading.Tasks.Task<global::GrpcServiceMock.Protos.Products> GetAll(global::GrpcServiceMock.Protos.EmptyProduct request, grpc::ServerCallContext context)
      {
        throw new grpc::RpcException(new grpc::Status(grpc::StatusCode.Unimplemented, ""));
      }

      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual global::System.Threading.Tasks.Task<global::GrpcServiceMock.Protos.PagingProductResponse> GetPaging(global::GrpcServiceMock.Protos.PagingProductRequest request, grpc::ServerCallContext context)
      {
        throw new grpc::RpcException(new grpc::Status(grpc::StatusCode.Unimplemented, ""));
      }

      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual global::System.Threading.Tasks.Task<global::GrpcServiceMock.Protos.ProductProto> GetById(global::GrpcServiceMock.Protos.ProductRowIdFilter request, grpc::ServerCallContext context)
      {
        throw new grpc::RpcException(new grpc::Status(grpc::StatusCode.Unimplemented, ""));
      }

      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual global::System.Threading.Tasks.Task<global::GrpcServiceMock.Protos.ProductResponse> Put(global::GrpcServiceMock.Protos.ProductProto request, grpc::ServerCallContext context)
      {
        throw new grpc::RpcException(new grpc::Status(grpc::StatusCode.Unimplemented, ""));
      }

      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual global::System.Threading.Tasks.Task<global::GrpcServiceMock.Protos.ProductResponse> Delete(global::GrpcServiceMock.Protos.ProductRowIdFilter request, grpc::ServerCallContext context)
      {
        throw new grpc::RpcException(new grpc::Status(grpc::StatusCode.Unimplemented, ""));
      }

    }

    /// <summary>Creates service definition that can be registered with a server</summary>
    /// <param name="serviceImpl">An object implementing the server-side handling logic.</param>
    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    public static grpc::ServerServiceDefinition BindService(ProductServiceBase serviceImpl)
    {
      return grpc::ServerServiceDefinition.CreateBuilder()
          .AddMethod(__Method_Insert, serviceImpl.Insert)
          .AddMethod(__Method_GetAll, serviceImpl.GetAll)
          .AddMethod(__Method_GetPaging, serviceImpl.GetPaging)
          .AddMethod(__Method_GetById, serviceImpl.GetById)
          .AddMethod(__Method_Put, serviceImpl.Put)
          .AddMethod(__Method_Delete, serviceImpl.Delete).Build();
    }

    /// <summary>Register service method with a service binder with or without implementation. Useful when customizing the  service binding logic.
    /// Note: this method is part of an experimental API that can change or be removed without any prior notice.</summary>
    /// <param name="serviceBinder">Service methods will be bound by calling <c>AddMethod</c> on this object.</param>
    /// <param name="serviceImpl">An object implementing the server-side handling logic.</param>
    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    public static void BindService(grpc::ServiceBinderBase serviceBinder, ProductServiceBase serviceImpl)
    {
      serviceBinder.AddMethod(__Method_Insert, serviceImpl == null ? null : new grpc::UnaryServerMethod<global::GrpcServiceMock.Protos.ProductProto, global::GrpcServiceMock.Protos.ProductResponse>(serviceImpl.Insert));
      serviceBinder.AddMethod(__Method_GetAll, serviceImpl == null ? null : new grpc::UnaryServerMethod<global::GrpcServiceMock.Protos.EmptyProduct, global::GrpcServiceMock.Protos.Products>(serviceImpl.GetAll));
      serviceBinder.AddMethod(__Method_GetPaging, serviceImpl == null ? null : new grpc::UnaryServerMethod<global::GrpcServiceMock.Protos.PagingProductRequest, global::GrpcServiceMock.Protos.PagingProductResponse>(serviceImpl.GetPaging));
      serviceBinder.AddMethod(__Method_GetById, serviceImpl == null ? null : new grpc::UnaryServerMethod<global::GrpcServiceMock.Protos.ProductRowIdFilter, global::GrpcServiceMock.Protos.ProductProto>(serviceImpl.GetById));
      serviceBinder.AddMethod(__Method_Put, serviceImpl == null ? null : new grpc::UnaryServerMethod<global::GrpcServiceMock.Protos.ProductProto, global::GrpcServiceMock.Protos.ProductResponse>(serviceImpl.Put));
      serviceBinder.AddMethod(__Method_Delete, serviceImpl == null ? null : new grpc::UnaryServerMethod<global::GrpcServiceMock.Protos.ProductRowIdFilter, global::GrpcServiceMock.Protos.ProductResponse>(serviceImpl.Delete));
    }

  }
}
#endregion

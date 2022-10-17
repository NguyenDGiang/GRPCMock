import './App.css';
import {CatagoryServiceClient } from "./Protos/category_grpc_web_pb";
import {ProductServiceClient } from "./Protos/product_grpc_web_pb";
import {ProductDetailServiceClient } from "./Protos/productDetail_grpc_web_pb";
import {Empty,PagingCategoryRequest, CategoryProto,CategoryRowIdFilter} from "./Protos/category_pb";
import {PagingProductDetailRequest,EmptyProductDetail,ProductDetailProto} from "./Protos/productDetail_pb";
import { ProductProto, PagingProductRequest,ProductRowIdFilter,EmptyProduct} from "./Protos/product_pb";
import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import moment from 'moment';
import ReactPaginate from 'react-paginate';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import * as timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Dropdown from 'react-bootstrap/Dropdown';
const categoryClient = new CatagoryServiceClient ("https://localhost:7173", null, null);
const productClient = new ProductServiceClient ("https://localhost:7173", null, null);
const productDetailClient = new ProductDetailServiceClient("https://localhost:7173", null, null);
function Category() {
  const [ActiveDropdown, setActiveDropdown] = useState(false);
  //Category
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseEdit= () => setShowEdit(false);
  const handleShowEdit = (item) => {
    setName(item.name);
    setTagName(item.tagname);
    setActive(item.active);
    setCategoryId(item.id);
    setShowEdit(true)
  };

  const [Categories, setCategories] = useState([]);
  const [ProductDetails, setProductDetails] = useState([]);
  const [buttonAdd, setButtonAdd] = useState(false);
  const [buttonPut, setButtonPut] = useState(false);
  const [pageCount, setPageCount] = useState(0);
  const [pageCurrent, setPageCurrent] = useState(1);
  const [Category, setCategory] = useState({
    Name : "",
    TagName: "",
    Active: false
  });
  const [CategoryAll, setCategoryAll] = useState([]);
  const [ProductAll, setProductAll] = useState([]);
  const [Name, setName] = useState("");
  const [TagName, setTagName] = useState("");
  const [Active, setActive] = useState(true);
  const [CategoryId, setCategoryId] = useState(false);
  const [Message, setMessage] = useState("");
  const onGetAll = (index = 1) => {
      
    var pagingCategoryRequest =  new PagingCategoryRequest ();
    pagingCategoryRequest.setPageindex(index);
    pagingCategoryRequest.setPagesize(5);
    categoryClient.getPaging(pagingCategoryRequest,null, (err, res) => {
      setPageCount(Math.ceil(res.toObject().count / pagingCategoryRequest.getPagesize));
      setCategories(res.toObject().dataList);
    });
  }
  const onGetAllProductDetail = (index = 1) => {
      
    var pagingProductDetailRequest =  new PagingProductDetailRequest ();
    pagingProductDetailRequest.setPageindex(index);
    pagingProductDetailRequest.setPagesize(5);
    productDetailClient.getPaging(pagingProductDetailRequest ,null, (err, res) => {
      setProductDetails(res.toObject().dataList);
    });
  }
  const onGetAllCategory = (index = 1) => {
      
    var empty =  new Empty ();
    
    categoryClient.getAll(empty,null, (err, res) => {
      setCategoryAll(res.toObject().itemsList);
    });
  }
  const onGetAllProduct = (index = 1) => {
      
    var empty =  new EmptyProduct();
    
    productClient.getAll(empty,null, (err, res) => {
      setProductAll(res.toObject().itemsList);
    });
  }
  const onAdd = () => {
    console.log("hello");
    var categoryProto =  new CategoryProto ();
    categoryProto.setName(Name);
    categoryProto.setActive(Active);
    categoryProto.setTagname(TagName);
    categoryClient.insert(categoryProto,null, (err, res) => {
      setMessage(res.toObject().status)
      alert(res.toObject().status);
      onGetAll();
    });
    
  }
  const onPut = () => {
    console.log(Active);
    var categoryProto =  new CategoryProto ();
    categoryProto.setName(Name);
    categoryProto.setActive(Active);
    categoryProto.setTagname(TagName);
    categoryProto.setId(CategoryId);
    categoryClient.put(categoryProto,null, (err, res) => {
      setMessage(res.toObject().status)
      alert(res.toObject().status);
      onGetAll();
    });
  }
  const onDelete = (item) => {
    console.log(Active);
    var categoryProto =  new CategoryRowIdFilter ();
    categoryProto.setId(item.id);
    
    categoryClient.delete(categoryProto,null, (err, res) => {
      setMessage(res.toObject().status)
      alert(res.toObject().status);
      onGetAll();
    });
    
  }
  useEffect(() => {
    onGetAllCategory();
    onGetAllPaging ();
    onGetAll();
    onGetAllProductDetail();
    onGetAllProduct();
  
  },[]);
  const onFormSubmit = e => {
    e.preventDefault();
    // send state to server with e.g. `window.fetch`
  }
  
  const handlePageClick = (event) => {
    setPageCurrent(event.selected + 1);
    onGetAll(event.selected + 1);
  };
  const onButton = () => {
    setButtonAdd(!buttonAdd);
  }
  const onButtonPut = (item) => {
    setName(item.name);
    setTagName(item.tagname);
    setActive(item.active);
    setCategoryId(item.id);
    setButtonPut(!buttonPut);
  }
  const onClose = () => {
    setButtonPut(false);
  }

  const onAddProduct = () => {
    
    var productProto =  new ProductProto ();
    productProto.setName(ProductName);
    productProto.setActive(ProductActive);
    productProto.setTagname(ProductTagName);
    productProto.setCategoryid(ProductCategoryId);
    productClient.insert(productProto,null, (err, res) => {
      setMessage(res.toObject().status)
      alert(res.toObject().status);
    });
    
  }
  const onAddProductDetail = () => {
   

    var productProto =  new ProductDetailProto ()
    .setPrice(Price)
    .setColor(Color)
    .setMadeby(MadeBy)
    .setProductid(ProductId)
    .setStartingdate(new timestamp_pb.Timestamp()
    .setSeconds(new Date(StartingTime)/1000))
    .setClosingdate(new timestamp_pb.Timestamp()
    .setSeconds(new Date(ClosingTime)/1000));
    productDetailClient.insert(productProto,null, (err, res) => {
      setMessage(res.toObject().status)
      alert(res.toObject().status);
    });
    
  }
  //Category
    //ProductDetail
    const [showAddproductDeatail, setShowAddproductDeatail] = useState(false);
    const handleShowAddproductDetail = () => setShowAddproductDeatail(true);
    const handleCloseAddproductDetail = () => setShowAddproductDeatail(false);
    const [Price, setPrice] = useState("");
    const [Color, setColor] = useState("");
    const [MadeBy, setMadeBy]= useState("");
    const [StartingTime, setStartingTime]= useState("");
    const [ClosingTime, setClosingTime]= useState("");
    const [ProductId, setProductId]= useState();
  //Product
  const [ProductCategory, setProductCategory] = useState();
  const [pageCurrentProduct, setPageCurrentProduct] = useState(1)
  const [showAddproduct, setShowAddproduct] = useState(false);
  const [showProductEdit, setShowEditproduct] = useState(false);
  const handleCloseAddproduct = () => setShowAddproduct(false);
  const handleShowAddproduct = () => setShowAddproduct(true);
  const [ProductTagName, setProductTagName] = useState("");
  const [ProductName, setProductName] = useState("");
  const [ProductActive, setProductActive] = useState(true);
  const [ProductCategoryId, setProductCategoryId] = useState();
  const [pageCountProduct, setPageCountProduct] = useState(0);
  const [products, setProducts] = useState([]);
  const [category, setCategoryProduct] = useState();
  const handleCloseEditProduct= () => setShowEditproduct(false);
  const [CategoryName, setCategoryName] = useState("");
  const onGetAllPaging = (index = 1) => {
  
    var pagingProductRequest =  new PagingProductRequest ();
    pagingProductRequest.setPageindex(index);
    pagingProductRequest.setPagesize(5);
    productClient.getPaging(pagingProductRequest,null, (err, res) => {
      setPageCountProduct(Math.ceil(res.toObject().count / pagingProductRequest.getPagesize));
      setProducts(res.toObject().dataList);
    });
  }

  const [CategorySelect, setCategorySelect] = useState();
  const handleShowEditProduct = (item) => {
    setProductName(item.name);
    setProductTagName(item.tagname);
    setProductActive(item.active);
    setProductCategoryId(item.id);
    setCategoryId(item.categoryid);
    setCategoryName(item.category.name);
    setShowEditproduct(true)
    setCategorySelect(item);
  };
  const onPutProduct = () => {
    var productProto =  new ProductProto ();
    productProto.setName(Name);
    productProto.setActive(Active);
    productProto.setTagname(TagName);
    productProto.setId(CategoryId);
    productProto.setCategoryid(CategoryId);
    console.log(productProto.getCategoryid());
    productClient.put(productProto,null, (err, res) => {
      setMessage(res.toObject().status)
      alert(res.toObject().status);
      onGetAll();
    });
  }

  

  const handlePageClickProduct = (event) => {
    setPageCurrentProduct(event.selected + 1);
    onGetAllPaging(event.selected + 1);
  };
  const [PageCurrentProductDetail,setPageCurrentProductDetail] = useState();
  const handlePageClickProductDetail = (event) => {
    setPageCurrentProductDetail(event.selected + 1);
    onGetAllProductDetail(event.selected + 1);
  };
  const onDeleteProduct = (item) => {
    var productProto =  new ProductRowIdFilter ();
    productProto.setId(item.id);
    
    productClient.delete(productProto,null, (err, res) => {
      setMessage(res.toObject().status)
      alert(res.toObject().status);
      onGetAllPaging();
    });
    
  }
  
  function getFormattedDate(date) {
    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');
  
    return day + '/' +  month + '/' + year;
  }
  return (
    <div className="App">
        <Tabs
      defaultActiveKey="Category"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="Category" title="Home">
      <Button variant="primary" onClick={handleShow}>
        Add
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={onFormSubmit}>
      <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control onChange={e =>setName(e.target.value)}  type="text" placeholder="Enter Text" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Tag Name</Form.Label>
        <Form.Control onChange={e =>setTagName(e.target.value)}  type="text" placeholder="Tag Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Label>Active</Form.Label>
        <Form.Check onChange={e =>setActive(e.target.checked)}  type="checkbox"/>
      </Form.Group>
      
      </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick = {()=>onAdd()} >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Add</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={onFormSubmit}>
      <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control onChange={e =>setName(e.target.value)} value ={Name} type="text" placeholder="Enter Text" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Tag Name</Form.Label>
        <Form.Control onChange={e =>setTagName(e.target.value)} value = {TagName} type="text" placeholder="Tag Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Label>Active</Form.Label>
        <Form.Check onChange={e =>setActive(e.target.checked)} checked={Active} type="checkbox"/>
      </Form.Group>
      
      </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEdit}>
            Close
          </Button>
          <Button variant="primary" onClick = {()=>onPutProduct()} >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      
      <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Name</th>
          <th>Tag Name</th>
          <th>Active</th>
          <th>Ngày Tạo</th>
        </tr>
      </thead>
      <tbody>
      {
        Categories.map((item,i)=>{
          return (
            <tr key ={i}>
            <td>{item.name}</td>
            <td>{item.tagname}</td>
            <td>{item.active == 1 ? "Active" : "No Active"}</td>
            <td>{getFormattedDate(new Date(item.createddate.seconds * 1000))}</td>
            <td><Button onClick = {()=>handleShowEdit(item)} variant="secondary" size="sm">
          Edit
        </Button>
        <Button onClick = {()=>onDelete(item)} variant="secondary" size="sm">
          Delete
        </Button>
        
        </td>
          </tr>)
        })
      }
       
      </tbody>
    </Table>
    
    <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={15}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </Tab>
      <Tab eventKey="product" title="Product">
      <Button variant="primary" onClick={handleShowAddproduct}>
        Add
      </Button>

      <Modal show={showAddproduct} onHide={handleCloseAddproduct}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={onFormSubmit}>
      <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control onChange={e =>setProductName(e.target.value)}  type="text" placeholder="Enter Text" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Tag Name</Form.Label>
        <Form.Control onChange={e =>setProductTagName(e.target.value)}  type="text" placeholder="Tag Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Label>Active</Form.Label>
        <Form.Check onChange={e =>setProductActive(e.target.checked)}  type="checkbox"/>
      </Form.Group>
      <Dropdown>
      <Form.Select onChange={e =>setProductCategoryId(e.target.value)} aria-label="Default select example">
      {
        CategoryAll.map((item,i)=>{
          return (
            <option value={item.id}>{item.name}</option>
           )
        })
      }
      
    </Form.Select>
    </Dropdown>
      </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAddproduct}>
            Close
          </Button>
          <Button variant="primary" onClick = {()=>onAddProduct()} >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showProductEdit} onHide={handleCloseEditProduct}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={onFormSubmit}>
      <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control onChange={e =>setProductName(e.target.value)} value ={ProductName} type="text" placeholder="Enter Text" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Tag Name</Form.Label>
        <Form.Control onChange={e =>setProductTagName(e.target.value)} value = {ProductTagName} type="text" placeholder="Tag Name" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Label>Active</Form.Label>
        <Form.Check onChange={e =>setProductActive(e.target.checked)} checked={ProductActive} type="checkbox"/>
      </Form.Group>
      <Form.Select value={CategoryId}  onChange={e =>setProductCategoryId(e.target.value)} aria-label="Default select example">
      {
        CategoryAll.map((item,i)=>{
          return (
            <option key = {i} value={item.id}>{item.name}</option>
           )
        })
      }
      
    </Form.Select>
      </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEditProduct}>
            Close
          </Button>
          <Button variant="primary" onClick = {()=>onPutProduct()} >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Name</th>
          <th>Tag Name</th>
          <th>Category</th>
          <th>Active</th>
          <th>Ngày Tạo</th>
        </tr>
      </thead>
      <tbody>
      {
        products.map((item,i)=>{
          return (
            <tr key ={i}>
            <td>{item.name}</td>
            <td>{item.tagname}</td>
            <td>{item.category.name}</td>
            <td>{item.active == 1 ? "Active" : "No Active"}</td>
            <td>{getFormattedDate(new Date(item.createddate.seconds * 1000))}</td>
            <td><Button onClick = {()=>handleShowEditProduct(item)} variant="secondary" size="sm">
          Edit
        </Button>
        <Button onClick = {()=>onDeleteProduct(item)} variant="secondary" size="sm">
          Delete
        </Button>
        
        </td>
          </tr>)
        })
      }
       
      </tbody>
    </Table>
    
    <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={15}
          onPageChange={handlePageClickProduct}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </Tab>
      <Tab eventKey="productDetail" title="ProductDetail">
      <Button variant="primary" onClick={handleShowAddproductDetail}>
        Add
      </Button>

      <Modal show={showAddproductDeatail} onHide={handleCloseAddproductDetail}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product Detail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={onFormSubmit}>
      <Form.Group className="mb-3" >
        <Form.Label>Price</Form.Label>
        <Form.Control onChange={e =>setPrice(e.target.value)}  type="text" placeholder="Enter Text" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Color</Form.Label>
        <Form.Control onChange={e =>setColor(e.target.value)}  type="text" placeholder="Tag Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>MadeBy</Form.Label>
        <Form.Control onChange={e =>setMadeBy(e.target.value)}  type="text" placeholder="Tag Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Starting</Form.Label>
        <Form.Control onChange={e =>setStartingTime(e.target.value)}  type="date" placeholder="Tag Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Closing</Form.Label>
        <Form.Control onChange={e =>setClosingTime(e.target.value)}  type="date" placeholder="Tag Name" />
      </Form.Group>
      <Dropdown>
      <Form.Select onChange={e =>setProductId(e.target.value)} aria-label="Default select example">
      {
        ProductAll.map((item,i)=>{
          return (
            <option value={item.id}>{item.name}</option>
           )
        })
      }
      
    </Form.Select>
    </Dropdown>
      </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAddproductDetail}>
            Close
          </Button>
          <Button variant="primary" onClick = {()=>onAddProductDetail()} >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      
      <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Price</th>
          <th>Color</th>
          <th>madeBy</th>
          <th>StartingDate</th>
          <th>ClosingDate</th>
          <th>Thao Tác</th>
        </tr>
      </thead>
      <tbody>
      {
        ProductDetails.map((item,i)=>{
          return (
            <tr key ={i}>
            <td>{item.price}</td>
            <td>{item.color}</td>
            <td>{item.madeby}</td>
            <td>{getFormattedDate(new Date(item.startingdate.seconds * 1000))}</td>
            <td>{getFormattedDate(new Date(item.closingdate.seconds * 1000))}</td>
            <td><Button onClick = {()=>handleShowEditProduct(item)} variant="secondary" size="sm">
          Edit
        </Button>
        <Button onClick = {()=>onDeleteProduct(item)} variant="secondary" size="sm">
          Delete
        </Button>
        
        </td>
          </tr>)
        })
      }
       
      </tbody>
    </Table>
    
    <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={15}
          onPageChange={handlePageClickProductDetail}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </Tab>
    </Tabs>
     
    </div>
  );
}

export default Category;
